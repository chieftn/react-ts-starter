import * as React from 'react';
import { Button } from '@fluentui/react-components';
import { useGroupEnrollmentsContext } from '../hooks/useEnrollmentGroupsContext';

export const ListStatus: React.FC = () => {
    const [{ sectionMode, enrollmentEntries, nextLink }, { fetchGroupEnrollmentEntries }] = useGroupEnrollmentsContext();
    const onLoadMoreClick = () => {
        fetchGroupEnrollmentEntries(nextLink);
    }

     if (sectionMode === 'uninitialized') {
        return <>uninitialized</>;
    }

    if (sectionMode === 'fetching') {
        return (
            <div>Working indicator</div>
        );
    }

    if (sectionMode === 'fetchingFailed') {
        return (
           <div>Message bar failed</div>
        );
    }


    if (sectionMode === 'idle' && enrollmentEntries.length === 0) {
        return <div>No items</div>;
    }

    if (sectionMode === 'idle' && nextLink) {
        return (
            <Button
                appearance={'primary'}
                disabled={false}
                onClick={onLoadMoreClick}
            >
                Load more
            </Button>
        );
    }

    return <></>;
};
