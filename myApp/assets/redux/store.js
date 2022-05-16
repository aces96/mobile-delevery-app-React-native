import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './modal.slice'
import mealReducer from './meals.slice'

export default configureStore({
    reducer: {
        modalReducer,
        mealReducer
    },
})