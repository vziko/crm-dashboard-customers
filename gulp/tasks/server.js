import browserSync from 'browser-sync';
import config from '../config.js';

const server = callback => {
	browserSync.create().init({
		server: {
			baseDir: config.dest.root
		},
		files: [
			`${config.dest.html}/*.html`,
			`${config.dest.css}/*.css`,
			`${config.dest.js}/*.js`,
			{
				match: `${config.dest.images}/**/*`,
				fn() {
					this.reload();
				},
			},
		],
		notify: false,
		open: false,
	});

	callback();
};

export default server;