import { combineReducers } from 'redux';
import subscriptionsReducer from '../../apps/subscriptions/reducer';

export default combineReducers({
    subscriptions: subscriptionsReducer
});
