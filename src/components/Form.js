import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import ReactDatePicker from 'react-datepicker'
import BasicModal from './ModalValidation'

export function Form() {
    const { register, handleSubmit, control } = useForm()
    const [data, setData] = useState('')

    return (
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
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

            <section className="date_container">
                <Controller
                    control={control}
                    name="Date of Birth"
                    render={({ field }) => (
                        <ReactDatePicker
                            {...register('dateOfBirth')}
                            placeholderText="Date of Birth"
                            onChange={(e) => field.onChange(e)}
                            selected={field.value}
                            type="date"
                            dateFormat="dd/MM/yyyy"
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
                            onChange={(e) => field.onChange(e)}
                            selected={field.value}
                            type="date"
                            dateFormat="dd/MM/yyyy"
                            todayButton="Today"
                        />
                    )}
                />
            </section>

            <section class="address">
                <legend>Address</legend>

                <label for="street">Street</label>
                <input id="street" {...register('sreet')} type="text" />

                <label for="city">City</label>
                <input {...register('city')} id="city" type="text" />

                <label for="state">State</label>
                <select {...register('state')} name="state" id="state"></select>

                <label for="zip-code">Zip Code</label>
                <input {...register('zipCode')} id="zip-code" type="number" />
            </section>

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

            <p>{data}</p>

            <BasicModal />
        </form>
    )
}
