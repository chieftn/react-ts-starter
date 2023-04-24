import * as React from 'react';
import { GroupEnrollmentsContextType, GroupEnrollmentsContext } from '../context';

export interface EnrollmentGroupsHeaderProps {
    enrollmentGroups: GroupEnrollmentsContextType;
}

export const EnrollmentGroupsHeader: React.FC<EnrollmentGroupsHeaderProps> = ({ enrollmentGroups }) => {
    return (
        <GroupEnrollmentsContext.Provider value={enrollmentGroups}>
            <div>hello header</div>
        </GroupEnrollmentsContext.Provider>
    );
};
