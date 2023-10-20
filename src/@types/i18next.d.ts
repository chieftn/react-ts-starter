import type resources from './resources';
import type { defaultNS } from '../localization/i18n';

declare module 'i18next' {
    interface CustomTypeOptions {
        defaultNS: typeof defaultNS;
        resources: typeof resources;
    }
}
