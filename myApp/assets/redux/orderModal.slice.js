import { createSlice } from '@reduxjs/toolkit'
import produce from "immer"


let initialState = {
  visibility: false,
}

export const OrderModalSlice = createSlice({
  name: 'OrderModalReducer',
  initialState,
  reducers: {
    updateVisibily: (state,action) => {
      return {
        ...state.visibility,
        visibility: action.payload
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const {updateVisibily} = OrderModalSlice.actions

export default OrderModalSlice.reducer