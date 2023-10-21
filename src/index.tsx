import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import './localization/i18n';

const ViewHolder = () => (
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

const container: HTMLElement | null = document.getElementById('reactTarget');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(<ViewHolder />);
