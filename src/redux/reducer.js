import { createSlice } from '@reduxjs/toolkit'

export const formSlice = createSlice({
    name: 'form',
    initialState: {
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        startDate: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        department: '',
    },
    reducers: {
        updateForm: (state, action) => {
            state[action.payload.field] = action.payload.value
        },
    },
})

export const { updateForm } = formSlice.actions
export default formSlice.reducer
