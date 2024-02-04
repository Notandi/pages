import { configureStore } from '@reduxjs/toolkit'
import EntityReducer from './entitySlice'

export const store = configureStore({
  reducer: {
    entity: EntityReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch