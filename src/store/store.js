import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from '../reducers/weather';

export const store = configureStore({
  reducer: {
    weather: weatherReducer
  },
})