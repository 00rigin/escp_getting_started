import { DataGrid } from '@mui/x-data-grid';
import { DataGridProps } from '@mui/x-data-grid/models/props/DataGridProps';
import * as React from 'react';

type TableProps = DataGridProps & React.RefAttributes<HTMLDivElement>;

const Table = (props: TableProps) => {
    return (
        <DataGrid
            sx={{
                border: 0,
                '& .MuiDataGrid-columnHeaderTitle': {
                    fontWeight: 'bolder',
                },
                '& .MuiDataGrid-columnSeparator': {
                    display: 'none',
                },
                '& .MuiDataGrid-cell': {
                    border: 0,
                },
            }}
            {...props}
        />
    );
};

export default Table;
