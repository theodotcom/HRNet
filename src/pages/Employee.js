import '../css/employee.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { columns } from '../utils/gridColumns'
import { EmployeeDataGrid } from '../components/DataGrid'

function EmployeesList() {
    const employees = useSelector((state) => state.employees)
    // Give an Id for each employee created
    const rows = employees.map((employee, index) => ({
        ...employee,
        id: index,
    }))

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: 550 }}>
            <div className="title2">
                <h2>HRnet</h2>
                <Link className="main-nav-logo" to="/">
                    <h3 className="sr-only">Create a new employee</h3>
                </Link>
            </div>
            <div style={{ flexGrow: 1 }}>
                <EmployeeDataGrid columns={columns} rows={rows} />
            </div>
        </div>
    )
}
export default EmployeesList
