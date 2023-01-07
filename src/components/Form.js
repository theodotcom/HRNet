import '../css/form.css'
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import { useDispatch } from 'react-redux'
import { addEmployee } from '../redux/reducer'
import { states } from '../utils/states'
import { departments } from '../utils/departments'
import { Select } from './Select.js'

export function Form() {
    const dispatch = useDispatch()

    //All states necessaries to gathered infos from the form
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [startDate, setStartDate] = useState(undefined)
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState(undefined)
    const [department, setDepartment] = useState('Engineering')
    const [state, setState] = useState('AL')

    const onSubmiting = (e) => {
        e.preventDefault()
        submitForm()
    }
    //function to check if all conditions are required
    //before sending forms data to the redux store
    const submitForm = () => {
        //More conditions could be added if needed
        //but client side server validation is kind of useless
        if (
            !firstName ||
            !lastName ||
            !city ||
            !zipCode ||
            !dateOfBirth ||
            !startDate ||
            !street
        ) {
            return
        }
        //Create my set of datas
        const employee = {
            firstName,
            lastName,
            dateOfBirth: dateOfBirth.toDateString(),
            startDate: startDate.toDateString(),
            street,
            city,
            state,
            zipCode,
            department,
        }
        //if all conditions are Ok, dispatch data to the store
        dispatch(addEmployee(employee))

        //Modal classic stuff
        const modal = document.getElementById('myModal')
        const span = document.getElementsByClassName('close')[0]
        modal.style.display = 'block'
        span.onclick = () => {
            modal.style.display = 'none'
        }
        window.onclick = (event) => {
            if (event.target === modal) {
                modal.style.display = 'none'
            }
        }
    }

    return (
        <div className="containertmr">
            <h2>Create Employee</h2>
            <form
                onSubmit={(e) => {
                    onSubmiting(e)
                }}
                className="form_container"
            >
                <div className="main_container">
                    <div className="left_container">
                        <section className="topForm_container">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                required
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                required
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />

                            <div className="date_container">
                                <label htmlFor="dateOfBirth">
                                    Date Of Birth
                                </label>
                                <ReactDatePicker
                                    required
                                    selected={dateOfBirth}
                                    onChange={(date) => setDateOfBirth(date)}
                                />
                            </div>
                            <div className="startDate_container">
                                <label htmlFor="startdate">Start Date</label>
                                <ReactDatePicker
                                    required
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                />
                            </div>
                        </section>
                        <section className="department_container">
                            <label htmlFor="department">Department</label>
                            <Select
                                required
                                items={departments}
                                onChange={(department) =>
                                    setDepartment(department)
                                }
                                selected={department}
                            />
                        </section>
                    </div>
                    <div className="right_container">
                        {' '}
                        <fieldset className="address_container">
                            <legend>Address</legend>

                            <label htmlFor="street">Street</label>
                            <input
                                required
                                id="street"
                                value={street}
                                onChange={(e) => setStreet(e.target.value)}
                                type="text"
                            />

                            <label htmlFor="city">City</label>
                            <input
                                required
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                id="city"
                                type="text"
                            />

                            <label htmlFor="state">State</label>
                            <Select
                                required
                                items={states}
                                onChange={(state) => setState(state)}
                                selected={state}
                            />

                            <label htmlFor="zip-code">Zip Code</label>
                            <input
                                required
                                value={zipCode}
                                onChange={(e) => setZipCode(e.target.value)}
                                id="zip-code"
                                type="number"
                            />
                        </fieldset>
                    </div>
                </div>
                <button id="myBtn" type="submit" className="btn">
                    Envoyer
                </button>

                <div id="myModal" className="modal">
                    <div className="modal-content">
                        <span className="close">&times;</span>
                        <p>Merci pour la creation de votre profil &#129299;</p>
                    </div>
                </div>
            </form>
        </div>
    )
}
