import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Application } from './application';
import './localization/i18n';
import './css/main.scss'; // tslint:disable-line

const ViewHolder = () => (
    <BrowserRouter>
        <Application/>
    </BrowserRouter>
);

ReactDOM.render(
    <ViewHolder/>, document.getElementById('reactTarget')
);
