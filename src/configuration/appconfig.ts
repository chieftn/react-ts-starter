import modeData from './mode.prod.json';
import targetData from './target.cloud.json';

export interface ModeConfig {
    debug?: boolean;
}

export interface TargetConfig {
    authorizationMode?: 'msal'
    apiHostHeader?: string;
}

export type AppConfig = ModeConfig & TargetConfig;

const modeConfig = modeData as ModeConfig;
const targetConfig = targetData as TargetConfig;
export const appConfig = {...modeConfig, ...targetConfig};
