import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { SubscriptionsState, subscriptionsStateInitial } from './state';
import { fetchSubscriptionsAction } from './actions';
import { SynchronizationStatus } from '../../shared/models/synchronizationStatus';
import { Subscription } from '../../shared/models/subscription';

const reducer = reducerWithInitialState<SubscriptionsState>(subscriptionsStateInitial())
    .case(fetchSubscriptionsAction.started, (state: SubscriptionsState) => {
        return {
            subscriptions: [],
            synchronizationStatus: SynchronizationStatus.working
        };
    })
    .case(fetchSubscriptionsAction.done, (state: SubscriptionsState,  payload: { result: Subscription[]}) => {
        return {
            subscriptions: [],
            synchronizationStatus: SynchronizationStatus.fetched
        };
    })
    .case(fetchSubscriptionsAction.failed, (state: SubscriptionsState, payload: { error: { code: number}}) => {
        return {
            subscriptions: [],
            synchronizationStatus: SynchronizationStatus.failed
        };
    });

export default reducer;
