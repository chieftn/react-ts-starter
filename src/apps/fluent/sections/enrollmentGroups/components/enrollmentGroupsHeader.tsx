import * as React from 'react';
import { GroupEnrollmentsContextType, GroupEnrollmentsContext } from '../context';
import { Commands } from './commands';

export interface EnrollmentGroupsHeaderProps {
    enrollmentGroups: GroupEnrollmentsContextType;
}

export const EnrollmentGroupsHeader: React.FC<EnrollmentGroupsHeaderProps> = ({ enrollmentGroups }) => {
    const [{ sectionMode }, { fetchGroupEnrollmentEntries }] = enrollmentGroups;

    React.useEffect(() => {
        if (sectionMode === 'uninitialized') {
            fetchGroupEnrollmentEntries();
        }
    }, [sectionMode]);

    return (
        <GroupEnrollmentsContext.Provider value={enrollmentGroups}>
            <Commands/>
        </GroupEnrollmentsContext.Provider>
    );
};
