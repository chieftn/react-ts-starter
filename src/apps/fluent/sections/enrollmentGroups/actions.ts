import actionCreatorFactory from 'typescript-fsa';
import type { TFunction } from 'i18next';
import type { SagaError } from './models';
import type { ContinuingResultSet } from './models';
import type { DataPlaneActionParameters } from './models';
import type { EnrollmentEntry, Sort } from './state';

export const GROUP_ENROLLMENTS = 'group';
const actionCreator = actionCreatorFactory(GROUP_ENROLLMENTS);

export interface TranslationParameters {
    t: TFunction;
}
export interface FetchGroupEnrollmentEntriesActionParameters extends DataPlaneActionParameters, TranslationParameters {
    query: string;
    nextLink?: string;
}
export const fetchGroupEnrollmentEntriesAction = actionCreator.async<FetchGroupEnrollmentEntriesActionParameters, ContinuingResultSet<EnrollmentEntry>, SagaError>('FETCH');
export const setSortAction = actionCreator<Sort>('SET_SORT');

export interface DeleteGroupEnrollmentEntriesActionParameters extends DataPlaneActionParameters, TranslationParameters {
    enrollmentIds: string[];
}
export const deleteGroupEnrollmentEntriesAction = actionCreator.async<DeleteGroupEnrollmentEntriesActionParameters, Set<string>, SagaError>('DELETE');
export const updateGroupEnrollmentEntryAction = actionCreator<EnrollmentEntry>('UPDATE');
