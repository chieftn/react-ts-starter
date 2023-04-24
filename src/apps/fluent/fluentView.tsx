import * as React from 'react';
import { TabList, Tab, SelectTabEvent, SelectTabData } from '@fluentui/react-components';
import { useGroupEnrollments } from './sections/enrollmentGroups/hooks/useEnrollmentGroups';
import { EnrollmentGroupsHeader } from './sections/enrollmentGroups/components/enrollmentGroupsHeader';

type Tabs = 'tab1' | 'tab2';

export const FluentView: React.FC = () => {
    const groupEnrollments = useGroupEnrollments();
    const [selectedTabValue, setSelectedTabValue] = React.useState<Tabs>('tab1');

    const onTabSelect = (event: SelectTabEvent, data: SelectTabData) => {
        setSelectedTabValue(data.value as Tabs);
    };

    return (
        <>
            <div>
                <TabList selectedValue={selectedTabValue} onTabSelect={onTabSelect}>
                    <Tab value="tab1">Enrollment groups</Tab>
                    <Tab value="tab2">Individual enrollments</Tab>
                </TabList>
            </div>
            <div>
                {selectedTabValue === "tab1" && <EnrollmentGroupsHeader enrollmentGroups={groupEnrollments}/>}
                {selectedTabValue === "tab2" && <div>Nothing here</div>}
            </div>
        </>
    );
};
