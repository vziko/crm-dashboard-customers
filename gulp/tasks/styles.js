import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import gcmq from 'gulp-group-css-media-queries';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';
import gulpif from 'gulp-if';
import config from '../config.js';

const sass = gulpSass(dartSass);

export const sassBuild = () => (
	gulp.src(`${config.src.sass}/**/*.scss`)
		.pipe(gulpif(config.isDev, sourcemaps.init()))
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(gulpif(config.isProd, gcmq()))
		.pipe(gulpif(config.isProd, autoprefixer()))
		.pipe(gulpif(config.isProd, cleanCSS({ level: 2 })))
		.pipe(rename({
			suffix: '.min',
		}))
		.pipe(gulpif(config.isDev, sourcemaps.write()))
	.pipe(gulp.dest(config.dest.css))
);

export const sassWatch = () => gulp.watch(`${config.src.sass}/**/*.scss`, sassBuild);