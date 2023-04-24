import { reducerWithoutInitialState } from 'typescript-fsa-reducers';
import { ContinuingResultSet } from './models';
import {
    deleteGroupEnrollmentEntriesAction,
    fetchGroupEnrollmentEntriesAction,
    FetchGroupEnrollmentEntriesActionParameters,
    setSortAction,
    updateGroupEnrollmentEntryAction } from './actions';
import { GroupEnrollmentsState, EnrollmentEntry, Sort } from './state';

export const enrollmentsReducer = reducerWithoutInitialState<GroupEnrollmentsState>()
    .case(setSortAction, (state: GroupEnrollmentsState, params: Sort) => {
        const updatedState = {...state};
        updatedState.sort = params;
        return updatedState;
    })
    .case(fetchGroupEnrollmentEntriesAction.started, (state: GroupEnrollmentsState, params: FetchGroupEnrollmentEntriesActionParameters) => {
        const updatedState = {...state};
        updatedState.sectionMode = 'fetching';
        updatedState.enrollmentEntries = params.nextLink && state.enrollmentEntries || [];
        updatedState.filter = params.query;

        return updatedState;
    })
    .case(fetchGroupEnrollmentEntriesAction.done, (state: GroupEnrollmentsState, payload: {result: ContinuingResultSet<EnrollmentEntry>}) => {
        const updatedState = {...state};
        updatedState.sectionMode = 'idle';
        updatedState.enrollmentEntries = [...state.enrollmentEntries, ...payload.result.items];
        updatedState.nextLink = payload.result.nextLink;

        return updatedState;
    })
    .case(fetchGroupEnrollmentEntriesAction.failed, (state: GroupEnrollmentsState) => {
        const updatedState = {...state};
        updatedState.sectionMode = 'fetchingFailed';

        return updatedState;
    })
    .case(deleteGroupEnrollmentEntriesAction.started, (state: GroupEnrollmentsState) => {
        const updatedState = {...state};
        updatedState.sectionMode = 'deleting';

        return updatedState;
    })
    .case(deleteGroupEnrollmentEntriesAction.done, (state: GroupEnrollmentsState, payload: { result: Set<string>}) => {
        const updatedState = {...state};
        updatedState.sectionMode = 'idle';
        updatedState.enrollmentEntries = state.enrollmentEntries.filter(s => !payload.result.has(s.id));

        return updatedState;
    })
    .case(deleteGroupEnrollmentEntriesAction.failed, (state: GroupEnrollmentsState) => {
        const updatedState = {...state};
        updatedState.sectionMode = 'idle';

        return updatedState;
    })
    .case(updateGroupEnrollmentEntryAction, (state: GroupEnrollmentsState, payload: EnrollmentEntry) => {
        const updatedState = {...state};
        updatedState.enrollmentEntries = state.enrollmentEntries.map(s => s.id === payload.id ? payload : s);

        return updatedState;
    });
