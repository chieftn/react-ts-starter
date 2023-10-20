import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Application } from './application';
import './localization/i18n';

const ViewHolder = () => (
    <React.StrictMode>
        <BrowserRouter>
            <Application />
        </BrowserRouter>
    </React.StrictMode>
);

const container: HTMLElement | null = document.getElementById('reactTarget');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(<ViewHolder />);
