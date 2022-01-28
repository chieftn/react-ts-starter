import data from './appconfig.dev.json';

export interface AppConfigInterface {
    debug?: boolean;
}

const appConfig = data as AppConfigInterface;
export default appConfig;
