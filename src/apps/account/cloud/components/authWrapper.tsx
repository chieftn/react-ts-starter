import * as React from 'react';
import {  MsalProvider } from '@azure/msal-react';
import { PublicClientApplication, EventType, AuthenticationResult } from '@azure/msal-browser';
import { msalConfig } from '../authConfig';

export const msalInstance = new PublicClientApplication(msalConfig);

// Account selection logic is app dependent. Adjust as needed for different use cases.
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
export const  AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
    return (
        <MsalProvider instance={msalInstance}>
            {children}
        </MsalProvider>
    );
};
