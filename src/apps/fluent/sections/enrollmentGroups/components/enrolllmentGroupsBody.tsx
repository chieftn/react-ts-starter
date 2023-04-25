import * as React from 'react';
import { GroupEnrollmentsContextType, GroupEnrollmentsContext } from '../context';
import { List } from './list';
import { ListStatus } from './listStatus';

export interface EnrollmentGroupsBodyProps {
    enrollmentGroups: GroupEnrollmentsContextType;
}

export const EnrollmentGroupsBody: React.FC<EnrollmentGroupsBodyProps> = ({ enrollmentGroups }) => {
    return (
        <GroupEnrollmentsContext.Provider value={enrollmentGroups}>
            <List/>
            <ListStatus/>
        </GroupEnrollmentsContext.Provider>
    );
};
