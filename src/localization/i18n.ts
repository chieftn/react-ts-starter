import * as i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import common from './locales/en/common.json';

export const defaultNS = 'common';
export const resources = {
    en: {
        common,
    },
} as const;

void i18n.use(initReactI18next).init({
    debug: false,
    fallbackLng: 'en',
    interpolation: { escapeValue: false }, // React already does escaping
    lng: 'en',
    ns: [defaultNS],
    defaultNS,
    parseMissingKeyHandler: (key: string) => {
        return key;
    },
    resources: {
        en: {
            common,
        },
    },
});

export default i18n;
