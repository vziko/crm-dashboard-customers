const srcPath = 'src';
const destPath = 'dist';

const config = {
	src: {
		root: srcPath,
		sass: `${srcPath}/scss`,
		js: `${srcPath}/js`,
		fonts: `${srcPath}/assets/fonts`,
		icons: `${srcPath}/assets/icons`,
		img: `${srcPath}/assets/img`,
		pug: `${srcPath}/pug`,
	},
	dest: {
		root: destPath,
		html: destPath,
		css: `${destPath}/css`,
		js: `${destPath}/js`,
		fonts: `${destPath}/fonts`,
		img: `${destPath}/img`,
	},
	setEnv() {
		this.isProd = process.argv.includes('--prod');
		this.isDev = !this.isProd;
	}
}

export default config;