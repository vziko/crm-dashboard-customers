import gulp from 'gulp';
import svgSprite from 'gulp-svg-sprite';
import config from '../config.js';

export const spritesBuild = () => (
	gulp.src(`${config.src.icons}/**/*.svg`)
	.pipe(svgSprite({
		mode: {
			symbol: {
				sprite: '../sprites/sprite.svg',
			},
		},
	}))
	.pipe(gulp.dest(config.dest.img))
);

export const spritesWatch = () => gulp.watch(`${config.src.icons}/**/*.svg`, spritesBuild);
