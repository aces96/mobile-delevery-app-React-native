import { createSlice } from '@reduxjs/toolkit'


let initialState = {
    show: false,
    meals: []
}

export const modalSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    update: (state) => {
      state.show = !show
    },
    addMeal: (state, payload)=>{
        state.meals = payload
    }
  },
})

// Action creators are generated for each case reducer function
export const {update, addMeal} = modalSlice.actions

export default modalSlice.reducer