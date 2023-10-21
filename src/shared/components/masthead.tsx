import * as React from 'react';
import { useTranslation } from 'react-i18next';

export const Masthead: React.FC = () => {
    const { t, i18n } = useTranslation('common');

    // eslint-disable-next-line no-console
    console.log(i18n);

    return (
        <div className='masthead'>
            <div className='application-name'>{t('productName')}</div>
        </div>
    );
};
