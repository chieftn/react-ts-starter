import 'babel-polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { AppContainer } from './shared/components/appContainer';
import configureStore from './shared/state/configureStore';

import './shared/localization/i18n';
require('./css/main.scss'); // tslint:disable-line

const ViewHolder = () => (
    <Provider store={configureStore()}>
        <HashRouter>
            <AppContainer />
        </HashRouter>
    </Provider>
);

ReactDOM.render(
    <ViewHolder/>, document.getElementById('reactTarget')
);
