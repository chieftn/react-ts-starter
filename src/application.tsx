import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Masthead } from './shared/components/masthead';
import { Breadcrumbs } from './apps/fluent/breacrumbs';

export const Application: React.FC = () => {
    return (
        <div>
            <div>
                <Masthead />
                <Breadcrumbs/>
            </div>
            <div>
               <Outlet/>
            </div>
        </div>
    );
};
