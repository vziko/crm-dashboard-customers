import { deleteSync } from 'del';
import config from '../config.js';

const clean = () => {
	return new Promise((resolve) => {
		deleteSync([config.dest.root]);
		resolve();
	});
};

export default clean;