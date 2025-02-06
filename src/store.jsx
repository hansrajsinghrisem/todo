import { configureStore } from '@reduxjs/toolkit'
import todoSlice from './features/todoslice'

export const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
})