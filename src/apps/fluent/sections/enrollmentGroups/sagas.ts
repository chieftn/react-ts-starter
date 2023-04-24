import { all, takeLatest } from 'redux-saga/effects';
import { deleteGroupEnrollmentEntriesAction, fetchGroupEnrollmentEntriesAction } from './actions';
import { fetchGroupEnrollmentEntriesSaga } from './sagas/fetchGroupEnrollmentEntriesSaga';
import { deleteGroupEnrollmentEntriesSaga } from './sagas/deleteGroupEnrollmentEntriesSaga';

export function* getEnrollmentsSagas() {
    yield all([
        takeLatest(fetchGroupEnrollmentEntriesAction.started, fetchGroupEnrollmentEntriesSaga),
        takeLatest(deleteGroupEnrollmentEntriesAction.started, deleteGroupEnrollmentEntriesSaga)
    ]);
}
