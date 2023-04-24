import * as React from 'react';
import { GroupEnrollmentsContext, GroupEnrollmentsContextType } from '../context';

export const useGroupEnrollmentsContext = () => React.useContext<GroupEnrollmentsContextType>(GroupEnrollmentsContext);
