import * as React from 'react';
import { useTranslation } from 'react-i18next';

export const Masthead: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className='masthead'>
            <div className='application-name'>{t('product1Nakjl;kj;ljme')}</div>
        </div>
    );
};
