import * as React from 'react';
import { GroupEnrollmentsContextType, GroupEnrollmentsContext } from '../context';
import { List } from './list';
import { List2 } from './list2';
import { ListStatus } from './listStatus';
import { Tabster } from './tabster';
export interface EnrollmentGroupsBodyProps {
    enrollmentGroups: GroupEnrollmentsContextType;
}

export const EnrollmentGroupsBody: React.FC<EnrollmentGroupsBodyProps> = ({ enrollmentGroups }) => {
    return (
        <GroupEnrollmentsContext.Provider value={enrollmentGroups}>
            <Tabster/>
            <List/>
            <List2/>
            <ListStatus/>
        </GroupEnrollmentsContext.Provider>
    );
};
