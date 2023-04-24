import * as React from 'react';
import { Routes, Route } from 'react-router';
import { Masthead } from './shared/components/masthead';
import { HomeView } from './apps/home/components/homeView';
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
                    <Route path={'/fluent'} element={<FluentView/>}/>
                </Routes>
            </div>
        </div>
    );
};
