import { useTranslation } from 'react-i18next';
import { Action } from 'typescript-fsa';
import { useAsyncSagaReducer } from './useAsyncSagaReducer';
import type { GroupEnrollmentsContextType } from '../context';
import { enrollmentsReducer } from '../reducer';
import { GroupEnrollmentsState, getInitialGroupEnrollmentsState } from '../state';
import { getGroupEnrollmentsInterface } from '../interface';
import { getEnrollmentsSagas } from '../sagas';

export const useGroupEnrollments = (): GroupEnrollmentsContextType => {
    const { t } = useTranslation();
    const getAccessParameters = async () => Promise.resolve({ authorization: 'auth', hostName: 'host'});

    const [state, dispatch] = useAsyncSagaReducer<GroupEnrollmentsState, Action<unknown>>(
        enrollmentsReducer,
        getEnrollmentsSagas,
        getInitialGroupEnrollmentsState()
    );

    const api = getGroupEnrollmentsInterface({dispatch, getAccessParameters, t});
    return [state, api];
};
