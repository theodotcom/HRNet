import '../css/form.css'
import { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import BasicModal from './ModalValidation'
import { useDispatch } from 'react-redux'
import { addEmployee } from '../redux/reducer'
import 'react-datepicker/dist/react-datepicker.css'

import Select from './Select'

export function Form() {
    const departments = [
        { label: 'Sales', value: 'Sales' },
        { label: 'Marketing', value: 'Marketing' },
        { label: 'Engineering', value: 'Engineering' },
        { label: 'Human Resources', value: 'Human Resources' },
        { label: 'Legal', value: 'Legal' },
    ]

    const states = [
        { label: 'Alabama', value: 'AL' },
        { label: 'Alabama2', value: 'AL2' },
    ]

    const dispatch = useDispatch()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [startDate, setStartDate] = useState(undefined)
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [zipCode, setZipCode] = useState('')

    const [dateOfBirth, setDateOfBirth] = useState(undefined)
    const [department, setDepartment] = useState('Engineering')
    const [state, setState] = useState('AL2')

    const onSubmiting = (e) => {
        e.preventDefault()
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
        console.log(employee)
        dispatch(addEmployee(employee))
    }

    return (
        <div className="containertmr">
            <form
                onSubmit={(e) => {
                    onSubmiting(e)
                }}
            >
                <div className="main_container">
                    <div className="left_container">
                        <section className="topForm_container">
                            <input
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder="First name"
                            />
                            <input
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder="Last name"
                            />

                            <div className="date_container">
                                <ReactDatePicker
                                    selected={dateOfBirth}
                                    placeholderText="Date of Birth"
                                    onChange={(date) => setDateOfBirth(date)}
                                />
                            </div>
                            <div className="startDate_container">
                                <ReactDatePicker
                                    selected={startDate}
                                    placeholderText="Start Date"
                                    onChange={(date) => setStartDate(date)}
                                />
                            </div>
                        </section>
                        <section className="department_container">
                            <label htmlFor="department">Department</label>
                            <Select
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
                        <section className="address_container">
                            <legend>Address</legend>

                            <label htmlFor="street">Street</label>
                            <input
                                id="street"
                                value={street}
                                onChange={(e) => setStreet(e.target.value)}
                                type="text"
                            />

                            <label htmlFor="city">City</label>
                            <input
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                id="city"
                                type="text"
                            />

                            <label htmlFor="state">State</label>
                            <Select
                                items={states}
                                onChange={(state) => setState(state)}
                                selected={state}
                            />

                            <label htmlFor="zip-code">Zip Code</label>
                            <input
                                value={zipCode}
                                onChange={(e) => setZipCode(e.target.value)}
                                id="zip-code"
                                type="number"
                            />
                        </section>
                    </div>
                </div>
                <BasicModal />
            </form>
        </div>
    )
}
