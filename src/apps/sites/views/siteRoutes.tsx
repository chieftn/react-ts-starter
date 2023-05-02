import * as React from 'react';
import type { RouteObject, useMatches } from 'react-router-dom';
import { AuthenticationBoundary } from '../../account/components/authenticationBoundary';
import { SiteCreate } from './siteCreate';
import { SiteDetails } from './siteDetails';
import { SiteList } from './siteList';

type Match = ReturnType<typeof useMatches>[number];
export const getRoutes = (): RouteObject => ({
    path: "sites",
    handle: {
        crumb: () => <span>sites</span>,
    },
    children: [
        {
            index: true,
            element: <AuthenticationBoundary><SiteList/></AuthenticationBoundary>
        },
        {
            path: ':id',
            element: <AuthenticationBoundary><SiteDetails/></AuthenticationBoundary>,
            loader: () => {
                return { a: sessionStorage.getItem("key") }
            },
            handle: {
                crumb: (match: Match) => <span>id: {match.params.id}</span>
            }
        },
        {
            path: 'add',
            element: <AuthenticationBoundary><SiteCreate/></AuthenticationBoundary>,
            handle: {
                crumb: () => <span>site add</span>
            }
        }
    ]
});
