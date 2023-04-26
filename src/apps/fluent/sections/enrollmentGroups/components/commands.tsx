import * as React from 'react';
import { Toolbar, ToolbarButton, ToolbarDivider, Menu, MenuTrigger, MenuItem, MenuPopover, MenuList } from '@fluentui/react-components';
import { ArrowCounterclockwise24Regular, AddRegular, AddFilled, bundleIcon } from '@fluentui/react-icons';

const Add = bundleIcon(AddRegular, AddFilled)
export const Commands: React.FC = () => {
    return (
        <Toolbar aria-label="Default">
            <ToolbarButton aria-label="Increase Font Size" icon={<Add/>}>
                Add
            </ToolbarButton>
            <ToolbarButton aria-label="Increase Font Size" icon={<ArrowCounterclockwise24Regular/>}>
                Refresh
            </ToolbarButton>
            <ToolbarDivider />
            <Menu>
                <MenuTrigger>
                    <ToolbarButton aria-label="More">More</ToolbarButton>
                </MenuTrigger>
                <MenuPopover>
                    <MenuList>
                        <MenuItem>New </MenuItem>
                        <MenuItem>New Window</MenuItem>
                        <MenuItem disabled>Open File</MenuItem>
                        <MenuItem>Open Folder</MenuItem>
                    </MenuList>
                </MenuPopover>
            </Menu>
        </Toolbar>
    );
};
