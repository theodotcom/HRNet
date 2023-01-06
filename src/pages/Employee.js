import { useSelector } from 'react-redux'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'

function EmployeesList() {
    const employees = useSelector((state) => state.employees)
    const rows = employees.map((employee, index) => ({
        ...employee,
        id: index,
    }))
    const columns = [
        { field: 'firstName', headerName: 'First Name', width: 150 },
        { field: 'lastName', headerName: 'Last Name', width: 150 },
        { field: 'dateOfBirth', headerName: 'Date Of Birth', width: 150 },
        { field: 'startDate', headerName: 'Start Date', width: 150 },
        { field: 'department', headerName: 'Department', width: 150 },
        { field: 'street', headerName: 'Street', width: 150 },
        { field: 'state', headerName: 'State', width: 150 },
        { field: 'city', headerName: 'City', width: 150 },
        { field: 'zipCode', headerName: 'Zip Code', width: 150 },
    ]

    return (
        <div style={{ display: 'flex', height: 350 }}>
            <div style={{ flexGrow: 1 }}>
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
            </div>
        </div>
    )
}
export default EmployeesList
