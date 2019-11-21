import * as React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Masthead } from './masthead';
import SubscriptionsView from '../../apps/subscriptions/components/subscriptionsView';
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
                        <Route path={`/subscriptions`} component={SubscriptionsView} />
                        <Route path={`/`} exact={true} component={HomeView} />
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    );
};
