import * as i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from './resources';

i18n
    .use(initReactI18next)
    .init({
        debug: false,
        fallbackLng: 'en',
        interpolation: { escapeValue: false },  // React already does escaping
        lng: 'en',
        parseMissingKeyHandler: (key: string) => {
            return key;
        },
        resources
    });

export default i18n;
