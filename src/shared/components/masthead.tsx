import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { ResourceKeys } from '../localization/resourceKeys';
import { login, getAccount, logout, getProfileToken } from '../../shared/services/ipcService';
require('../../css/components/_masthead.scss'); //tslint:disable-line

export const Masthead: React.FC = () => {
    const { t } = useTranslation();
    const [account, setAccount] = React.useState(undefined);

    React.useEffect(() => {
        const getMyAccount = async () => {
            const myAccount = await getAccount();
            setAccount(myAccount);
        };
        getMyAccount();
    // tslint:disable-next-line: align
    }, []);

    const loginStart = async () => {
        await login();
    };

    const logoutStart = async () => {
        await logout();
    };

    const getProfileTokenStart = async () => {
        const token = await getProfileToken();
        // tslint:disable-next-line: no-console
        console.log('token: ' + token);
    };

    return (
        <div className="masthead">
            <div className="application-name">{t(ResourceKeys.common.productName)}</div>
            <PrimaryButton
                text="Login"
                onClick={loginStart}
            />

            <PrimaryButton
                text="Logout"
                onClick={logoutStart}
            />

            <PrimaryButton
                text="Profile"
                onClick={getProfileTokenStart}
            />
            <div>{JSON.stringify(account)}</div>
        </div>
    );
};
