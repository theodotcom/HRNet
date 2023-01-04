import { createSlice } from '@reduxjs/toolkit'

export const formSlice = createSlice({
    name: 'form',
    initialState: {
        employees: [],
    },
    reducers: {
        addEmployee: (state, action) => {
            state.employees.push(action.payload)
        },
    },
})

export const { addEmployee } = formSlice.actions
export default formSlice.reducer
