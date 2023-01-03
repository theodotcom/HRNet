import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import ReactDatePicker from 'react-datepicker'
import BasicModal from './ModalValidation'
import { useSelector, useDispatch } from 'react-redux'
import { updateForm } from '../redux/reducer'

export function Form() {
    const { register, handleSubmit, control } = useForm()
    const [data, setData] = useState('')
    const formState = useSelector((state) => state.form)
    const dispatch = useDispatch()

    const onSubmit = (data) => {
        dispatch(updateForm({ field: 'firstName', value: data.firstName }))
        dispatch(updateForm({ field: 'lastName', value: data.lastName }))
        dispatch(updateForm({ field: 'dateOfBirth', value: data.dateOfBirth }))
        dispatch(updateForm({ field: 'startDate', value: data.startDate }))
        dispatch(updateForm({ field: 'street', value: data.street }))
        dispatch(updateForm({ field: 'city', value: data.city }))
        dispatch(updateForm({ field: 'state', value: data.state }))
        dispatch(updateForm({ field: 'zipCode', value: data.zipCode }))
        dispatch(updateForm({ field: 'department', value: data.department }))
    }

    const onChange = (e) => {
        dispatch(updateForm({ field: e.target.name, value: e.target.value }))
    }

    return (
        <div className="containertmr">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    {...register('firstName')}
                    placeholder="First name"
                    onChange={onChange}
                />
                <input
                    type="text"
                    {...register('lastName')}
                    placeholder="Last name"
                    onChange={onChange}
                />

                <section className="date_container">
                    <Controller
                        control={control}
                        name="Date of Birth"
                        render={({ field }) => (
                            <ReactDatePicker
                                {...register('dateOfBirth')}
                                placeholderText="Date of Birth"
                                selected={field.value}
                                type="date"
                                dateFormat="dd/MM/yyyy"
                                onChange={onChange}
                            />
                        )}
                    />
                </section>
                <section className="startDate_container">
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
                                todayButton="Today"
                                onChange={onChange}
                            />
                        )}
                    />
                </section>

                <section class="address">
                    <legend>Address</legend>

                    <label for="street">Street</label>
                    <input
                        id="street"
                        {...register('sreet')}
                        type="text"
                        onChange={onChange}
                    />

                    <label for="city">City</label>
                    <input
                        {...register('city')}
                        id="city"
                        type="text"
                        onChange={onChange}
                    />

                    <label for="state">State</label>
                    <select
                        {...register('state')}
                        name="state"
                        id="state"
                        onChange={onChange}
                    ></select>

                    <label for="zip-code">Zip Code</label>
                    <input
                        {...register('zipCode')}
                        id="zip-code"
                        type="number"
                        onChange={onChange}
                    />
                </section>

                <label for="department">Department</label>
                <select
                    name="department"
                    {...register('department', { required: true })}
                    onChange={onChange}
                >
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>

                <p>{data}</p>

                <BasicModal />
            </form>
        </div>
    )
}
