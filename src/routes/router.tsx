import * as React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { HomeView } from '../apps/home/components/homeView';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeView />,
    },
]);
