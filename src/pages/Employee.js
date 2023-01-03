import { Link } from 'react-router-dom'

const Employee = () => {
    return (
        <div className="body">
            <Link className="main-nav" to="/">
                <h1 className="sr-only">Home</h1>
            </Link>
            <h1>Current Employees</h1>
        </div>
    )
}

export default Employee
