import gulp from 'gulp';
import config from './gulp/config.js';
import clean from './gulp/tasks/clean.js';
import server from './gulp/tasks/server.js';
import { scriptsBuild, scriptsWatch} from "./gulp/tasks/scripts.js";
import { pugBuild, pugWatch} from "./gulp/tasks/pug.js";
import { sassBuild, sassWatch } from "./gulp/tasks/styles.js";
import { assetsBuild, assetsWatch } from "./gulp/tasks/assets.js";
import { imagesBuild, imagesWatch } from "./gulp/tasks/images.js";
import { spritesBuild, spritesWatch } from "./gulp/tasks/sprites.js";


config.setEnv();

export const build = gulp.series(
	clean,
	gulp.parallel(
		scriptsBuild,
		sassBuild,
		pugBuild,
		assetsBuild,
		imagesBuild,
		spritesBuild,
	)
);

export const watch = gulp.series(
	build,
	server,
	gulp.parallel(
		scriptsWatch,
		sassWatch,
		pugWatch,
		assetsWatch,
		imagesWatch,
		spritesWatch
	)
);