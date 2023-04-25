import * as React from 'react';
import {
    Button,
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHeaderCell,
    TableColumnDefinition,
    createTableColumn,
    SortDirection,
    TableColumnId,
    TableCellLayout,
    TableCellActions,
    TableCell } from '@fluentui/react-components';
import { EditFilled, EditRegular, bundleIcon } from '@fluentui/react-icons';
import { useGroupEnrollmentsContext } from '../hooks/useEnrollmentGroupsContext';
import { EnrollmentEntry } from '../state';
// import { EnrollmentLink } from './enrollmentLink';

export interface SortState {
    sortColumn: TableColumnId | undefined;
    sortDirection: SortDirection;
}

const EditIcon = bundleIcon(EditFilled, EditRegular);

export const List2: React.FC = () => {
    const [{ enrollmentEntries }] = useGroupEnrollmentsContext();
    // const [sortState, setSortState] = React.useState<SortState>({ sortColumn: 'id', sortDirection: 'ascending'});
    // const [selection, setSelection] = React.useState<Set<TableRowId>>(new Set([]));
    const onClick = () => { alert('hi')};

    const columns: TableColumnDefinition<EnrollmentEntry>[] = React.useMemo(() => [
        createTableColumn<EnrollmentEntry>({
            columnId: 'id',
            renderHeaderCell: () => 'Name',

            renderCell: (item) =>
                <TableCell>
                    <TableCellLayout>
                       {item.id}
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
    // const onSortChange: DataGridProps['onSortChange'] = (_, data) => {
    //     console.log(sortState);
    //     setSelection(new Set());
    //     setSortState({ sortColumn: 'id', sortDirection: 'descending'})
    //     fetchGroupEnrollmentEntries();
    // };

    //  // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const onSelectionChange: DataGridProps["onSelectionChange"] = (_, data) => {
    //     setSelection(data.selectedItems);
    // };

    return (
        <Table aria-label="Table with cell actions">
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHeaderCell key={column.columnId}>
                    Name
                </TableHeaderCell>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {enrollmentEntries.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <TableCellLayout media={item.id}>
                    {item.id}
                  </TableCellLayout>
                  <TableCellActions>
                    <Button icon={<EditIcon />} appearance="subtle" />
                  </TableCellActions>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      );
};
