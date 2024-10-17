import gulp from 'gulp';
import debug from 'gulp-debug';
import changed from 'gulp-changed';
import config from '../config.js';

export const imagesBuild = () => (
	gulp.src(`${config.src.img}/**/*`, { encoding: false })
	.pipe(changed(config.dest.img)) // Todo maybe remove
	.pipe(debug({title: 'images:'}))
	.pipe(gulp.dest(config.dest.img))
);

export const imagesWatch = () => gulp.watch(`${config.src.img}/**/*`, { encoding: false }, imagesBuild);
