import { MsalAuthProvider, LoginType } from 'react-aad-msal';

const config = {
  auth: {
    authority: 'https://login.microsoftonline.com/common',
    clientId: 'e2596303-b8a1-400d-9b44-6b8e358d7586',
    redirectUri:  window.location.origin
  },
  cache: {
    storeAuthStateInCookie: true
  }
};

const authenticationParameters = {
  scopes: [
    'openid',
    'profile',
    'User.read'
  ]
};

export const authProvider = new MsalAuthProvider(config, authenticationParameters, LoginType.Redirect);
