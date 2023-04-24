import * as React from 'react';
import { GroupEnrollmentsState, getInitialGroupEnrollmentsState  } from './state';
import { GroupEnrollmentsInterface, getGroupEnrollmentsInterfaceNoop } from './interface';

export type GroupEnrollmentsContextType = [GroupEnrollmentsState, GroupEnrollmentsInterface];
export const GroupEnrollmentsContext = React.createContext<GroupEnrollmentsContextType>([
    getInitialGroupEnrollmentsState(),
    getGroupEnrollmentsInterfaceNoop()
]);
