import { createLogger } from 'redux-logger';
import * as Immutable from 'immutable';
import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import rootSaga from './saga';
import { StateInterface } from './state';
import appConfig from '../../configuration/appconfig';

export default () => {
    const middlewares = [];
    const sagaMiddleware = createSagaMiddleware();
    middlewares.push(sagaMiddleware);
    let enhancer;

    if (appConfig.debug) {
        const stateTransformer = (state: StateInterface) => {
            const s = Immutable.fromJS(state);
            return s.toJS();
        };

        const logger = createLogger({
            stateTransformer
        });

        middlewares.push(logger);

        // tslint:disable: no-any
        const composeEnhancers =
        typeof window === 'object' &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

        enhancer = composeEnhancers(applyMiddleware(...middlewares));
        // tslint:enable:no-any
    } else {
        enhancer = compose(applyMiddleware(...middlewares));
    }

    const store = createStore(rootReducer, enhancer);
    sagaMiddleware.run(rootSaga);

    return store;
};
