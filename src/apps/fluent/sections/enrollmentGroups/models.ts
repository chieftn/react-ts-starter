export interface ContinuingResultSet<T> {
    items: T[];
    nextLink: string;
}

export enum Format {
    blankLine = '<br></br>',
    newLine = '<br>',
    continueLine = ' ',
}

export interface DisplayMessage {
    prefixFormat?: Format;
    key: string;
    interpolation?: Record<string, object | string>;
}

export interface SagaError {
    displayEntries: DisplayMessage[];
    innerError?: Error | object;
}


export interface AccessParameters {
    authorization: string;
    hostName: string;
}

export type GetAccessParametersFunction = (requiredRights: string[]) => Promise<AccessParameters>;
export interface DataPlaneActionParameters { getAccessParameters: GetAccessParametersFunction; }

export interface GroupEnrollment {
    enrollmentGroupId: string;
}
