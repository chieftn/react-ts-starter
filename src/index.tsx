import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Application } from './application';
import { FluentProvider, teamsLightTheme } from '@fluentui/react-components';
import { AccountWrapper } from './apps/account/components/accountWrapper';
import './localization/i18n';
import './css/main.scss'; // tslint:disable-line

const ViewHolder = () => (
    <AccountWrapper>
        <FluentProvider theme={teamsLightTheme}>
            <BrowserRouter>
                <Application/>
            </BrowserRouter>
        </FluentProvider>
    </AccountWrapper>
);

const container: HTMLElement | null  = document.getElementById('reactTarget');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(<ViewHolder/>);
