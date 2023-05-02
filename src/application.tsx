import * as React from 'react';
import { Routes, Route } from 'react-router';
import { Masthead } from './shared/components/masthead';
import { HomeView } from './apps/home/components/homeView';
import { AccountBoundary } from './apps/account/components/accountBoundary';
import { FluentView } from './apps/fluent/fluentView';

export const Application: React.FC = () => {
    return (
        <div>
            <div>
                <Masthead />
            </div>
            <div>
                <Routes>
                    <Route path={`/`} element={<HomeView/>} />
                    <Route
                        path={'/fluent'}
                        element={
                            <AccountBoundary>
                                <FluentView/>
                            </AccountBoundary>
                        }
                    />
                </Routes>
            </div>
        </div>
    );
};
