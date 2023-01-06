import { Link } from 'react-router-dom'
import { Form } from '../components/Form'
import '../css/index.css'

const Index = () => {
    return (
        <div className="body_container">
            <div className="title">
                <h2>HRnet</h2>
                <Link className="main-nav-logo" to="/employee">
                    <h3 className="sr-only">View Current Employees</h3>
                </Link>
            </div>
            <Form />
        </div>
    )
}

export default Index
