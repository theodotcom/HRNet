import { useSelector } from 'react-redux'
import { useContext } from 'react'

function EmployeesList() {
    const employees = useSelector((state) => state.employees)

    return (
        <ul>
            {employees.map((employee) => (
                <li>
                    <h3>
                        {employee.firstName} {employee.lastName}
                        {employee.startDate}
                    </h3>
                    <p>
                        Address: {employee.street}, {employee.city},{' '}
                        {employee.state}, {employee.zipCode}
                    </p>
                    <p>Department: {employee.department}</p>
                </li>
            ))}
        </ul>
    )
}
export default EmployeesList
