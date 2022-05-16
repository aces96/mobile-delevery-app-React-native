import { createSlice } from '@reduxjs/toolkit'


let initialState = {
    repas: []
}

export const mealSlice = createSlice({
  name: 'mealReducer',
  initialState,
  reducers: {
    addRepas: (state, payload)=>{
        state.repas = payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { addRepas} = mealSlice.actions

export default mealSlice.reducer