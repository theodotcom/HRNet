import { configureStore } from '@reduxjs/toolkit'

import { formSlice } from './reducer'

const store = configureStore({
    reducer: formSlice.reducer,
})

export default store
