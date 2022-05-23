import { createSlice } from '@reduxjs/toolkit'


let initialState = {
    repas: []
}

export const mealSlice = createSlice({
  name: 'mealReducer',
  initialState,
  reducers: {
    addRepas: (state, action)=>{
        return {
          ...state.repas,
          repas: action.payload
        }
    }
  },
})

// Action creators are generated for each case reducer function
export const { addRepas} = mealSlice.actions

export default mealSlice.reducer