import { Subscription } from '../../shared/models/subscription';
import { SynchronizationStatus } from '../../shared/models/synchronizationStatus';

export interface SubscriptionsState {
    subscriptions: Subscription[];
    synchronizationStatus: SynchronizationStatus;
}

export const subscriptionsStateInitial = (): SubscriptionsState => {
    return {
        subscriptions: [],
        synchronizationStatus: SynchronizationStatus.initialized
    };
};
