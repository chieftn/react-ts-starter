import * as React from 'react';
import { useTranslation } from 'react-i18next';
import './masthead.scss';

export const Masthead: React.FC = () => {
    const { t } = useTranslation(['common']);

    return (
        <div className='masthead'>
            <div className='application-name'>{t('product1Name')}</div>
        </div>
    );
};
