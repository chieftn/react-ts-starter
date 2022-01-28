import * as React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { parse } from 'query-string';
import { Masthead } from './masthead';
import { SubscriptionsView } from '../../apps/subscriptions/components/subscriptionsView';
import { HomeView } from '../../apps/home/components/homeView';

export const AppContainer: React.FC = () => {
    const history = useHistory();

    React.useEffect(() => {
        const queryStrings = parse(window.location.search);
        const path: string = queryStrings.redirect as string || '';
        // tslint:disable-next-line: no-console
        console.log(path);
        if (path) {
            history.replace(path);
        }
    }, []); // tslint:disable-line: align

    return (
        <div>
            <div>
                <Masthead />
            </div>
            <div>
                <Switch>
                    <Route path={`/subscriptions`} component={SubscriptionsView} />
                    <Route path={`/`} exact={true} component={HomeView} />
                </Switch>
            </div>
        </div>
    );
};
