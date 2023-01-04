import '../css/form.css'
import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import ReactDatePicker from 'react-datepicker'
import BasicModal from './ModalValidation'
import { useDispatch } from 'react-redux'
import { addEmployee } from '../redux/reducer'
import 'react-datepicker/dist/react-datepicker.css'

export function Form() {
    const { register, handleSubmit, control } = useForm()

    const dispatch = useDispatch()

    const onSubmit = (data) => {
        const employee = {
            firstName: data.firstName,
            lastName: data.lastName,
            dateOfBirth: data.dateOfBirth,
            startDate: data.startDate,
            street: data.street,
            city: data.city,
            state: data.state,
            zipCode: data.zipCode,
            department: data.department,
        }
        dispatch(addEmployee(employee))
    }

    return (
        <div className="containertmr">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="main_container">
                    <div className="left_container">
                        <section className="topForm_container">
                            <input
                                type="text"
                                {...register('firstName')}
                                placeholder="First name"
                            />
                            <input
                                type="text"
                                {...register('lastName')}
                                placeholder="Last name"
                            />

                            <div className="date_container">
                                <Controller
                                    control={control}
                                    name="Date of Birth"
                                    render={({ field }) => (
                                        <ReactDatePicker
                                            {...register('dateOfBirth', {
                                                valueAsDate: true,
                                            })}
                                            placeholderText="Date of Birth"
                                            selected={field.value}
                                            onChange={(date) =>
                                                field.onChange(date)
                                            }
                                            dateFormat="dd/MM/yyyy"
                                        />
                                    )}
                                />
                            </div>
                            <div className="startDate_container">
                                <Controller
                                    control={control}
                                    name="Start Date"
                                    render={({ field }) => (
                                        <ReactDatePicker
                                            {...register('startDate')}
                                            placeholderText="Start Date"
                                            selected={field.value}
                                            type="date"
                                            dateFormat="dd/MM/yyyy"
                                            onChange={(date) =>
                                                field.onChange(date)
                                            }
                                        />
                                    )}
                                />
                            </div>
                        </section>
                        <section className="department_container">
                            <label for="department">Department</label>
                            <select
                                name="department"
                                {...register('department', { required: true })}
                            >
                                <option>Sales</option>
                                <option>Marketing</option>
                                <option>Engineering</option>
                                <option>Human Resources</option>
                                <option>Legal</option>
                            </select>
                        </section>
                    </div>
                    <div className="right_container">
                        {' '}
                        <section class="address_container">
                            <legend>Address</legend>

                            <label for="street">Street</label>
                            <input
                                id="street"
                                {...register('sreet')}
                                type="text"
                            />

                            <label for="city">City</label>
                            <input
                                {...register('city')}
                                id="city"
                                type="text"
                            />

                            <label for="state">State</label>
                            <select
                                {...register('state')}
                                name="state"
                                id="state"
                            ></select>

                            <label for="zip-code">Zip Code</label>
                            <input
                                {...register('zipCode')}
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
