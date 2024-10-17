import gulp from 'gulp';
import config from '../config.js';

const fontsBuild = () => (
	gulp.src(`${config.src.fonts}/**/*`, { encoding: false })
		.pipe(gulp.dest(config.dest.fonts))
);

export const assetsBuild = gulp.parallel(fontsBuild);

export const assetsWatch = () => {
	gulp.watch(`${config.src.fonts}/**/*`, fontsBuild);
};