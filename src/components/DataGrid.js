import { DataGrid, GridToolbar } from '@mui/x-data-grid'

const EmployeeDataGrid = ({ columns, rows }) => (
    <DataGrid
        title="Current Employees"
        columns={columns}
        rows={rows}
        pagination
        components={{ Toolbar: GridToolbar }}
        componentsProps={{
            toolbar: {
                showQuickFilter: true,
                quickFilterProps: { debounceMs: 500 },
            },
        }}
    />
)

export { EmployeeDataGrid }
