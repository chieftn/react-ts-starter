import * as React from 'react';
import {
    Button,
    DataGrid,
    DataGridBody,
    DataGridHeader,
    DataGridHeaderCell,
    DataGridRow,
    DataGridCell,
    TableColumnDefinition,
    createTableColumn,
    SortDirection,
    TableColumnId,
    DataGridProps,
    TableCellLayout,
    TableCellActions,
    TableCell,
    TableRowId } from '@fluentui/react-components';
import { EditFilled, EditRegular, bundleIcon } from '@fluentui/react-icons';
import { useGroupEnrollmentsContext } from '../hooks/useEnrollmentGroupsContext';
import { EnrollmentEntry } from '../state';
import { EnrollmentLink } from './enrollmentLink';

export interface SortState {
    sortColumn: TableColumnId | undefined;
    sortDirection: SortDirection;
}

const EditIcon = bundleIcon(EditFilled, EditRegular);

export const List: React.FC = () => {
    const [{ enrollmentEntries }, { fetchGroupEnrollmentEntries }] = useGroupEnrollmentsContext();
    const [sortState, setSortState] = React.useState<SortState>({ sortColumn: 'id', sortDirection: 'ascending'});
    const [selection, setSelection] = React.useState<Set<TableRowId>>(new Set([]));
    const onClick = () => { alert('hi')};

    const columns: TableColumnDefinition<EnrollmentEntry>[] = React.useMemo(() => [
        createTableColumn<EnrollmentEntry>({
            columnId: 'id',
            renderHeaderCell: () => 'Name',

            renderCell: (item) =>
                <TableCell>
                    <TableCellLayout>
                       <EnrollmentLink id={item.id}/>
                    </TableCellLayout>
                    <TableCellActions>
                        <Button icon={<EditIcon />} onClick={onClick} appearance="subtle" />

                    </TableCellActions>
                </TableCell>
        }),
        createTableColumn<EnrollmentEntry>({
            columnId: 'enabled',
            renderHeaderCell: () => 'Enabled',
            renderCell: () =>
                <TableCell>
                    <TableCellLayout><div>something</div></TableCellLayout>
                </TableCell>
        })
    ], []);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const onSortChange: DataGridProps['onSortChange'] = (_, data) => {
        console.log(sortState);
        setSelection(new Set());
        setSortState({ sortColumn: 'id', sortDirection: 'descending'})
        fetchGroupEnrollmentEntries();
    };

     // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const onSelectionChange: DataGridProps["onSelectionChange"] = (_, data) => {
        setSelection(data.selectedItems);
    };

    return (
        <DataGrid
            items={enrollmentEntries}
            columns={columns}
            sortable
            onSortChange={onSortChange}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            sortState={sortState}
            selectionMode="multiselect"
            getRowId={(item) => item.id}
            resizableColumns={true}
            selectedItems={selection}
            onSelectionChange={onSelectionChange}
                    focusMode={'none'}
        >
            <DataGridHeader>
                <DataGridRow selectionCell={{ "aria-label": "Select all rows" }}>
                    {({ renderHeaderCell }) => (
                        <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>
                    )}
                </DataGridRow>
            </DataGridHeader>
            <DataGridBody<EnrollmentEntry>>
                {({ item, rowId }) => (
                    <DataGridRow<EnrollmentEntry>
                        key={rowId}
                        selectionCell={{ "aria-label": "Select row" }}
                    >
                    {({ renderCell }) => (
                        <DataGridCell>{renderCell(item)}</DataGridCell>
                    )}
                    </DataGridRow>
                )}
            </DataGridBody>
        </DataGrid>
    );
};
