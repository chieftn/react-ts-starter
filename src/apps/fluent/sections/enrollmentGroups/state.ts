export interface EnrollmentEntry {
    id: string;
    createdDateUtc?: string;
    enabled: boolean;
    lastUpdatedDateUtc?: string;
    attestationTypeLocalized: string;
}
export type SectionMode = 'uninitialized' | 'fetching' | 'fetchingFailed' | 'idle' | 'deleting';
export type SortField = 'id' | 'createdDateUtc' | 'lastUpdatedDateUtc' | 'enabled' | 'attestationTypeLocalized';
export type SortOrder = 'asc' | 'desc';
export type Sort = [SortField, SortOrder];

export interface GroupEnrollmentsState {
    filter?: string;
    sort: Sort;
    enrollmentEntries: EnrollmentEntry[];
    nextLink?: string;
    sectionMode: SectionMode;
}
export const getInitialGroupEnrollmentsState = (): GroupEnrollmentsState => ({
    enrollmentEntries: [],
    sectionMode: 'uninitialized',
    sort: ['id', 'asc']
});
