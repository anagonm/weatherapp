import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../reducers/weather';
import airPollutionReducer from '../reducers/airPollution';
import forecastReducer from '../reducers/forecast';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    airPollution: airPollutionReducer,
    forecast: forecastReducer,
  },
})