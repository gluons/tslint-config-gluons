import isProd from './utils/is-prod';

const config = require('./tslint.json');

config.rules['no-console'] = [isProd()];
config.rules['no-debugger'] = isProd();

export default config;
