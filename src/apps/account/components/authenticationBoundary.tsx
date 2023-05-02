import * as React from 'react';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { appConfig } from '../../../configuration/appconfig';
import { InteractionStatus } from '@azure/msal-browser';
import { AuthenticationRequired } from './authenticationRequired';

export interface AuthenticationBoundaryProps {
    children: React.ReactNode;
}
export const AuthenticationBoundary: React.FC<AuthenticationBoundaryProps> = ({ children }) => {
    const { authorizationMode } = appConfig;
    const msal = useMsal();
    const isAuthenticated = useIsAuthenticated();

    if (authorizationMode !== 'msal') {
        return <>{children}</>;
    }


    if (msal.inProgress === InteractionStatus.None) {
        return (
            <>
                {isAuthenticated ? <>{children}</> : <AuthenticationRequired/> }
            </>
        )
    }

    return <></>;
};
