import { useSelector } from 'react-redux'

function EmployeesList() {
    const employees = useSelector((state) => state.employees)

    return (
        <ul>
            {employees.map((employee) => (
                <li>
                    <h3>
                        {employee.firstName} {employee.lastName}
                    </h3>
                    <p>Date of Birth: {employee.dateOfBirth}</p>
                    <p>Start Date: {employee.startDate}</p>
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
