import { TFunction } from 'i18next';
import { Action } from 'typescript-fsa';
import type { GetAccessParametersFunction } from './models';
import type { GroupEnrollment } from './models';
import {
    fetchGroupEnrollmentEntriesAction,
    deleteGroupEnrollmentEntriesAction,
    setSortAction,
    updateGroupEnrollmentEntryAction } from './actions';
import type { Sort } from './state';
import { generateGroupEnrollmentEntry } from './utils';

export interface GroupEnrollmentsInterface {
    fetchGroupEnrollmentEntries(nextLink?: string): void;
    deleteGroupEnrollmentEntries(enrollmentIds: string[]): void;
    setFilterText(filter: string): void;
    setSort(sort: Sort): void;
    updateGroupEnrollment(enrollment: GroupEnrollment): void;
}

export const getGroupEnrollmentsInterfaceNoop = (): GroupEnrollmentsInterface => ({
    deleteGroupEnrollmentEntries: () => undefined,
    fetchGroupEnrollmentEntries: () => undefined,
    setFilterText: () => undefined,
    setSort: () => undefined,
    updateGroupEnrollment: () => undefined,
});

export interface GetGroupEnrollmentsInterfaceParameters {
    getAccessParameters: GetAccessParametersFunction;
    dispatch: (action: Action<unknown>) => void;
    t: TFunction;
}
export const getGroupEnrollmentsInterface = (parameters: GetGroupEnrollmentsInterfaceParameters): GroupEnrollmentsInterface => {
    const { getAccessParameters, dispatch, t } = parameters;
    const query = 'query';

    return {
        deleteGroupEnrollmentEntries: enrollmentIds => dispatch(deleteGroupEnrollmentEntriesAction.started({ getAccessParameters, enrollmentIds, t })),
        fetchGroupEnrollmentEntries: nextLink => dispatch(fetchGroupEnrollmentEntriesAction.started({ getAccessParameters, query, nextLink, t})),
        setFilterText: filter => dispatch(fetchGroupEnrollmentEntriesAction.started({ getAccessParameters, query: filter, t })),
        setSort: sort => dispatch(setSortAction(sort)),
        updateGroupEnrollment: enrollment => {
            const enrollmentEntry = generateGroupEnrollmentEntry(enrollment);
            dispatch(updateGroupEnrollmentEntryAction(enrollmentEntry));
        }
    };
};
