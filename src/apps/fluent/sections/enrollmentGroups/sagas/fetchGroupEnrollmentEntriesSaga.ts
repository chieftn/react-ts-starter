import { Action } from 'typescript-fsa';
import { put, delay } from 'redux-saga/effects';
import { ContinuingResultSet } from '../models';
import { FetchGroupEnrollmentEntriesActionParameters, fetchGroupEnrollmentEntriesAction, TranslationParameters } from '../actions';
import { GroupEnrollment } from '../models';
import { EnrollmentEntry } from '../state';
import { generateGroupEnrollmentEntry, formatError } from '../utils';

export function* fetchGroupEnrollmentEntriesSaga(action: Action<FetchGroupEnrollmentEntriesActionParameters & TranslationParameters>) {
    try {
        yield delay(2000);
        const enrollmentsResult: ContinuingResultSet<GroupEnrollment> = {
            items: [
                { enrollmentGroupId: 'id1' },
                { enrollmentGroupId: 'id2' },
                { enrollmentGroupId: 'id3-a' },
                { enrollmentGroupId: 'id4-b' }
            ],
            nextLink: ''
        }
        const items: EnrollmentEntry[] = enrollmentsResult.items.map(s => generateGroupEnrollmentEntry(s));

        yield put(fetchGroupEnrollmentEntriesAction.done({
            params: action.payload,
            result: {
                items,
                nextLink: enrollmentsResult.nextLink
            }
        }));
    }
    catch (e) {
        const error = formatError(e);
        yield put(fetchGroupEnrollmentEntriesAction.failed({params: action.payload, error }));
    }
}
