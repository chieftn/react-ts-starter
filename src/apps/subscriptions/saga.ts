import { takeEvery } from 'redux-saga/effects';
import { fetchSubscriptionsAction } from './actions';
import { fetchSubscriptionsSaga } from './sagas/fetchSubscriptionsSaga';

export default [
    takeEvery(fetchSubscriptionsAction.started.type, fetchSubscriptionsSaga)
];
