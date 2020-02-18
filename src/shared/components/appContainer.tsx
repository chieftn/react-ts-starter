import * as React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Masthead } from './masthead';
import { D3View } from '../../apps/home/components/d3View';
import { D3Force } from '../../apps/home/components/d3Force';
import { HomeView } from '../../apps/home/components/homeView';

export const AppContainer: React.FC = () => {
    return (
        <div>
            <div>
                <Masthead />
            </div>
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path={`/d3View`} component={D3View} />
                        <Route path={`/d3Force`} component={D3Force} />
                        <Route path={`/`} exact={true} component={HomeView} />
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    );
};
