import * as React from 'react';
import {
    TabList,
    Tab,
    SelectTabEvent,
    SelectTabData,
    Portal,
    Button,
    Overflow,
    OverflowItem,
    Menu,
    MenuTrigger,
    MenuPopover,
    MenuItem,
    makeStyles,
    tokens,
    MenuList,
    useIsOverflowItemVisible,
    useOverflowMenu } from '@fluentui/react-components';
import {
    MoreHorizontalFilled,
    MoreHorizontalRegular,
    bundleIcon,
} from "@fluentui/react-icons";
import { useGroupEnrollments } from './sections/enrollmentGroups/hooks/useEnrollmentGroups';
import { EnrollmentGroupsHeader } from './sections/enrollmentGroups/components/enrollmentGroupsHeader';
import { EnrollmentGroupsBody } from './sections/enrollmentGroups/components/enrolllmentGroupsBody';

const MoreHorizontal = bundleIcon(MoreHorizontalFilled, MoreHorizontalRegular);

type Tabs = 'tab1' | 'tab2';

type ExampleTab = {
    id: string;
    name: string;
    icon?: React.ReactElement;
};

type OverflowMenuItemProps = {
    tab: ExampleTab;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onClick: React.MouseEventHandler<any>;
    // onClick: React.MouseEventHandler<ARIAButtonElement<"div">>;
  };

  /**
   * A menu item for an overflow menu that only displays when the tab is not visible
   */
  const OverflowMenuItem = (props: OverflowMenuItemProps) => {
    const { tab, onClick } = props;
    const isVisible = useIsOverflowItemVisible(tab.id);

    if (isVisible) {
      return null;
    }

    return (
      <MenuItem key={tab.id} icon={tab.icon} onClick={onClick}>
        <div>{tab.name}</div>
      </MenuItem>
    );
};

const useOverflowMenuStyles = makeStyles({
    menu: {
      backgroundColor: tokens.colorNeutralBackground1,
    },
    menuButton: {
      alignSelf: "center",
    },
  });


type OverflowMenuProps = {
    onTabSelect?: (tabId: string) => void;
    tabs: Array<{ id: string, name: string}>
};

const OverflowMenu = (props: OverflowMenuProps) => {
    const { onTabSelect, tabs } = props;
    const { ref, isOverflowing, overflowCount } =
      useOverflowMenu<HTMLButtonElement>();

    const styles = useOverflowMenuStyles();

    const onItemClick = (tabId: string) => {
      onTabSelect?.(tabId);
    };

    if (!isOverflowing) {
      return null;
    }

    return (
      <Menu hasIcons>
        <MenuTrigger disableButtonEnhancement>
          <Button
            appearance="transparent"
            className={styles.menuButton}
            ref={ref}
            icon={<MoreHorizontal />}
            aria-label={`${overflowCount} more tabs`}
            role="tab"
          />
        </MenuTrigger>
        <MenuPopover>
          <MenuList className={styles.menu}>
            {tabs.map((tab) => (
              <OverflowMenuItem
                key={tab.id}
                tab={tab}
                onClick={() => onItemClick(tab.id)}
              />
            ))}
          </MenuList>
        </MenuPopover>
      </Menu>
    );
  };


export const FluentView: React.FC = () => {
    const groupEnrollments = useGroupEnrollments();
    const [selectedTabValue, setSelectedTabValue] = React.useState<Tabs>('tab1');
    const [portalOn, setPortalOn] = React.useState<boolean>();

    const onTabSelect = (event: SelectTabEvent, data: SelectTabData) => {
        setSelectedTabValue(data.value as Tabs);
    };

    const onTabSelect2 = (tabId: string) => {
        setSelectedTabValue(tabId as Tabs);
    };

    const togglePortal = () => {
        setPortalOn(!portalOn)
    }

    const tabs = React.useMemo(() => [
        {
            disabled: false,
            id: 'tab1',
            name: 'Enrollment groups1',
            value: 'tab1'
        },
        {
            disabled: false,
            id: 'tab2',
            name: 'Enrollment groups2',
            value: 'tab2'
        },
        {
            disabled: false,
            id: 'tab3',
            name: 'Enrollment groups3',
            value: 'tab3'
        },
        {
            disabled: false,
            id: 'tab4',
            name: 'Enrollment groups4',
            value: 'tab4'
        },
        {
            disabled: false,
            id: 'tab5',
            name: 'Enrollment groups5',
            value: 'tab5'
        }
    ], []);

    return (
        <>
            <Button onClick={togglePortal}>Click me</Button>
            <div>
                <Overflow minimumVisible={1}>
                    <TabList selectedValue={selectedTabValue} onTabSelect={onTabSelect}>
                        {tabs.map((tab) => {
                            return (
                                <OverflowItem key={tab.id} id={tab.id} priority={tab.id === selectedTabValue ? 2 : 1}>
                                    <Tab disabled={tab.disabled} id={tab.id} value={tab.value}>{tab.name}</Tab>
                                </OverflowItem>
                            );
                        })}
                        <OverflowMenu onTabSelect={onTabSelect2} tabs={tabs} />
                    </TabList>
                  </Overflow>

            </div>
            <div>
                {selectedTabValue === "tab1" &&
                    <div role="tabpanel" aria-labelledby="tab1">
                        <EnrollmentGroupsHeader enrollmentGroups={groupEnrollments}/>
                        <EnrollmentGroupsBody enrollmentGroups={groupEnrollments}/>
                    </div>
                }


                {selectedTabValue === "tab2" && <div>Nothing here</div>}
                {portalOn &&
                    <Portal mountNode={document.body}>
                        <div style={{backgroundColor: 'red', height: '100vh', width: '100vw'}}>Hello world</div>
                    </Portal>
                }

            </div>
        </>
    );
};
