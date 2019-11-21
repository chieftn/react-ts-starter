import { Action } from 'typescript-fsa';
import { delay } from 'redux-saga/effects';

export function* fetchSubscriptionsSaga(action: Action<void>) {
    // tslint:disable-next-line:no-magic-numbers
    yield delay(1000);
}
