const config = require('./appconfig.ENV.json'); // tslint:disable-line: no-var-requires

export interface AppConfigInterface {
    debug?: boolean;
}

const appConfig = config as AppConfigInterface;
export default appConfig;
