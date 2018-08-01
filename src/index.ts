import Config from './types/Config';
import isProd from './utils/is-prod';

const config: Config = require('../tslint.json');

if (config && config.rules) {
	config.rules['no-console'] = isProd();
	config.rules['no-debugger'] = isProd();
}

export = config;
