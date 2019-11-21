import { all } from 'redux-saga/effects';
import subscriptionsSagas from '../../apps/subscriptions/saga';

export default function* rootSaga() {
    yield all([
        ...subscriptionsSagas
    ]);
}
