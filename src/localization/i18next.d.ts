import type common from './locales/en/common.json';
import type { defaultNS } from './i18n';

export interface Resources {
    common: typeof common;
}

declare module 'i18next' {
    interface CustomTypeOptions {
        defaultNS: typeof defaultNS;
        resources: Resources;
    }
}
