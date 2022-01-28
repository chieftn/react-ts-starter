import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { ResourceKeys } from '../../localization/resourceKeys';
import './masthead.scss'

export const Masthead: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="masthead">
            <div className="application-name">{t(ResourceKeys.common.productName)}</div>
        </div>
    );
};
