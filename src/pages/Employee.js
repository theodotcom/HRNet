import { useSelector } from 'react-redux'
import DataTable from 'react-data-table-component'

function EmployeesList() {
    const employees = useSelector((state) => state.employees)
    const columns = [
        {
            name: 'First Name',
            selector: (row) => row.firstName,
            sortable: true,
            filterable: true,
        },
        {
            name: 'Last Name',
            selector: (row) => row.lastName,
            sortable: true,
            filterable: true,
        },
        {
            name: 'Date Of Birth',
            selector: (row) => row.dateOfBirth,
            sortable: true,
            filterable: true,
        },
        {
            name: 'Start Date',
            selector: (row) => row.startDate,
            sortable: true,
            filterable: true,
        },
        {
            name: 'Department',
            selector: (row) => row.department,
            sortable: true,
            filterable: true,
        },
        {
            name: 'Street',
            selector: (row) => row.street,
            sortable: true,
            filterable: true,
        },
        {
            name: 'State',
            selector: (row) => row.state,
            sortable: true,
            filterable: true,
        },
        {
            name: 'City',
            selector: (row) => row.city,
            sortable: true,
            filterable: true,
        },
        {
            name: 'Zip Code',
            selector: (row) => row.zipCode,
            sortable: true,
            filterable: true,
        },
    ]

    return (
        <DataTable
            title="Current Employees"
            columns={columns}
            data={employees}
            pagination
            highlightOnHover
            responsive
            defaultSortFieldId={1}
        />
    )
}
export default EmployeesList
