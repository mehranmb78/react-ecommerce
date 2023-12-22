import { configureStore } from '@reduxjs/toolkit'
import basket from './Basket/basketSlice.ts'

export const store = configureStore({
  reducer: {
    basket,
  },
})

export type RootState = ReturnType<typeof store.getState>
