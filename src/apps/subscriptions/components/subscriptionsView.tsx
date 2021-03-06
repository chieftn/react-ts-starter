import * as React from 'react';
// import { AzureAD } from 'react-aad-msal';
import { withAuthentication } from 'react-aad-msal';

// Import the provider created in a different file//
import { authProvider } from '../../../shared/services/authService';

export const SubscriptionsView: React.FC = () => {
    return (
        <div>Subscriptions</div>
    );
};

export default withAuthentication(SubscriptionsView, {
    provider: authProvider
});
