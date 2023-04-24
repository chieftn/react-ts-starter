import type { EnrollmentEntry } from './state';
import type { GroupEnrollment, SagaError } from './models';

export const generateGroupEnrollmentEntry = (enrollmentGroup: GroupEnrollment): EnrollmentEntry => {
    return {
        id: enrollmentGroup.enrollmentGroupId,
        createdDateUtc: '2023-02-03T00:00:00Z',
        enabled: true,
        lastUpdatedDateUtc: '2023-02-04T00:00:00Z',
        attestationTypeLocalized: 'Attestation'
    };
};

export const formatError = (e: Error): SagaError => ({
    displayEntries: [{ key: 'errorOccurred' }],
    innerError: e
})