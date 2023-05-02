import * as React from 'react';
import type { RouteObject, useMatches } from 'react-router-dom';
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
            element: <SiteList/>
        },
        {
            path: ':id',
            element: <SiteDetails/>,
            handle: {
                crumb: (match: Match) => <span>id: {match.params.id}</span>
            }
        },
        {
            path: 'add',
            element: <SiteCreate/>,
            handle: {
                crumb: () => <span>site me</span>
            }
        }
    ]
});
