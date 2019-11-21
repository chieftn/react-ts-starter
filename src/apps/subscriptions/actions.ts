import actionCreatorFactory from 'typescript-fsa';
import { FETCH_SUFFIX } from '../../shared/constants';
import { Subscription } from '../../shared/models/subscription';

const SUBSCRIPTIONS_PREFIX = 'SUBSCRIPTIONS';
const actionCreator = actionCreatorFactory(SUBSCRIPTIONS_PREFIX);

const fetchSubscriptionsAction = actionCreator.async<void, Subscription[], {code: number}>(FETCH_SUFFIX);

export {
    fetchSubscriptionsAction
};
