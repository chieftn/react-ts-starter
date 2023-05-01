import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { ResourceKeys } from '../../localization/resourceKeys';
import { Account } from '../../apps/account/components/account';
import './masthead.scss'

export const Masthead: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="masthead">
            <div className="application-name">{t(ResourceKeys.common.productName)}</div>
            <span style={{ marginLeft: 10, backgroundColor: 'white'}}>
                <Account/>
            </span>
        </div>
    );
};
