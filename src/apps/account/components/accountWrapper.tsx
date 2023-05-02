import * as React from 'react';
import {  MsalProvider } from '@azure/msal-react';
import { PublicClientApplication, EventType, AuthenticationResult } from '@azure/msal-browser';
import { msalConfig } from '../../../configuration/authConfig';
import { appConfig } from '../../../configuration/appconfig';

const msalInstance = new PublicClientApplication(msalConfig);
const accounts = msalInstance.getAllAccounts();
if (accounts.length > 0) {
    msalInstance.setActiveAccount(accounts[0]);
}

msalInstance.addEventCallback((event) => {
    if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
        const payload = event.payload as AuthenticationResult;
        const account = payload.account;
        msalInstance.setActiveAccount(account);
    }
});

export interface AuthWrapperProps {
    children: React.ReactNode;
}
export const  AccountWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
    const msalEnabled = appConfig.authorizationMode === 'msal';

    if (!msalEnabled) {
        return (
            <>{children}</>
        );
    }

    return (
        <MsalProvider instance={msalInstance}>
            {children}
        </MsalProvider>
    );
};
