import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Application } from './application';
import { FluentProvider, teamsLightTheme } from '@fluentui/react-components';
import { AccountWrapper } from './apps/account/components/accountWrapper';
import { getRoutes as getSiteRoutes } from './apps/sites/views/siteRoutes';
import './localization/i18n';
import './css/main.scss'; // tslint:disable-line
import { ErrorBoundary } from './shared/components/errorBoundary';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Application/>,
      handle: {
        crumb: () => <span>root</span>
      },
      children: [
        getSiteRoutes()
      ],
      errorElement: <ErrorBoundary/>
    },
  ]);

const ViewHolder = () => (
  <React.StrictMode>
    <AccountWrapper>
        <FluentProvider theme={teamsLightTheme}>
          <RouterProvider router={router} />
        </FluentProvider>
    </AccountWrapper>
  </React.StrictMode>
);

const container: HTMLElement | null  = document.getElementById('reactTarget');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(<ViewHolder/>);
