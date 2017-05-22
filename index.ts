import isProd from './utils/is-prod';

const config = require('./tslint.json');

config['no-console'] = [isProd()];
config['no-debugger'] = isProd();

export default config;
