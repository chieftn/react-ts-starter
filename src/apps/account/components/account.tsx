import * as React from 'react';
import { useMsal, AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';
import { Link } from '@fluentui/react-components';
import { loginRequest } from '../../../configuration/authConfig';
import { appConfig } from '../../../configuration/appconfig';

export const Account: React.FC = () => {
    if (appConfig.authorizationMode !== 'msal') {
        return <></>;
    }

    const { instance } = useMsal();

    let activeAccount;

    if (instance) {
        activeAccount = instance.getActiveAccount();
    }

    const handleLoginRedirect = () => {
        instance.loginRedirect(loginRequest).catch((error) => console.log(error));
    };

    const handleLogoutRedirect = () => {
        instance.logoutRedirect().catch((error) => console.log(error));
    };

    return (
        <div>
             <AuthenticatedTemplate>
                <div>
                    <span>{activeAccount ? activeAccount.name : 'Unknown'}</span>
                    <Link onClick={handleLogoutRedirect}>Logout</Link>
                </div>
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <div>
                    <Link onClick={handleLoginRedirect}>Login</Link>
                </div>
            </UnauthenticatedTemplate>
        </div>
    );
};
