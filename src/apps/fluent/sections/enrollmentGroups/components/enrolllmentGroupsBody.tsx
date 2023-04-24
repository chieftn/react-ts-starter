import * as React from 'react';
import { GroupEnrollmentsContextType, GroupEnrollmentsContext } from '../context';

export interface EnrollmentGroupsBodyProps {
    enrollmentGroups: GroupEnrollmentsContextType;
}

export const EnrollmentGroupsBody: React.FC<EnrollmentGroupsBodyProps> = ({ enrollmentGroups }) => {
    return (
        <GroupEnrollmentsContext.Provider value={enrollmentGroups}>
            <div>hello Body</div>
        </GroupEnrollmentsContext.Provider>
    );
};
