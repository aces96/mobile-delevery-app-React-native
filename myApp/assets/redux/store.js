import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './modal.slice'

export default configureStore({
    reducer: {
        modalReducer
    },
})