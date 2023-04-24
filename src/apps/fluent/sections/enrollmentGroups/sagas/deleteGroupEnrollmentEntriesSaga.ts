import { Action } from 'typescript-fsa';
import { put } from 'redux-saga/effects';
import { formatError } from '../utils';
import { DeleteGroupEnrollmentEntriesActionParameters, deleteGroupEnrollmentEntriesAction, TranslationParameters } from '../actions';

export function* deleteGroupEnrollmentEntriesSaga(action: Action<DeleteGroupEnrollmentEntriesActionParameters & TranslationParameters>) {
    try {
        const successfulDelete: Array<{enrollmentId: string}> = [];

        yield put(deleteGroupEnrollmentEntriesAction.done({ params: action.payload, result: new Set(successfulDelete.map(s => s.enrollmentId)) }));
    }
    catch (e) {
        const error = formatError(e);
        yield put(deleteGroupEnrollmentEntriesAction.failed({params: action.payload, error }));
    }
}
