import { Link } from 'react-router-dom'
import { Form } from '../components/Form'

const Index = () => {
    return (
        <div className="body_container">
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="main_infos">
                <Link className="main-nav-logo" to="/employee">
                    <h1 className="sr-only">View Current Employees</h1>
                </Link>
                <h2>Create Employee</h2>
            </div>
            <Form />
        </div>
    )
}

export default Index
