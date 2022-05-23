import { createSlice } from '@reduxjs/toolkit'


let initialState = {
    show: false,
    meal: []
}

export const modalSlice = createSlice({
  name: 'modalReducer',
  initialState,
  reducers: {
    update: (state, action) => {
      return {
        ...state,
        show: action.payload
      }    
    },
    addMeal: (state, action)=>{
      return{
        ...state,
        meal: action.payload
      }
    }

  },
})

// Action creators are generated for each case reducer function
export const {update, addMeal} = modalSlice.actions

export default modalSlice.reducer