import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../types'

interface stateType {
  value: Product[]
}

const state: stateType = {
  value: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState: state,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      state.value.push(action.payload)
    },
  },
})

export const { add } = basketSlice.actions
export default basketSlice.reducer
