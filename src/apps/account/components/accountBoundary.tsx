import * as React from 'react';
import { useIsAuthenticated, useAccount, useMsal } from '@azure/msal-react';
import { appConfig } from '../../../configuration/appconfig';
import { InteractionStatus } from '@azure/msal-browser';

export interface AccountBoundaryProps {
    children: React.ReactNode;
}
export const AccountBoundary: React.FC<AccountBoundaryProps> = ({ children }) => {
    const { authorizationMode } = appConfig;
    const isAuthenticated = useIsAuthenticated();
    const account = useAccount();
    console.log(account);
    // const msalAuth = useMsalAuthentication();
    const msal = useMsal();

    console.log('----------------------------------------------');
    console.log(`inProgress: ${msal.inProgress}`);
    console.log(`authenticated: ${isAuthenticated}`)
    console.log('----------------------------------------------');

    if (authorizationMode === 'msal') {
        return (
            <>
                {msal.inProgress !== InteractionStatus.None && <></>}
                {(msal.inProgress === InteractionStatus.None && !isAuthenticated) && <div>Please login</div>}
                {(msal.inProgress === InteractionStatus.None && isAuthenticated) && <>{children}</>}
            </>
        );
    }

    return <>{children}</>
};
