import * as WeatherAPI from '../api/weather';
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getWeatherByLatLon = createAsyncThunk('weather/getWeatherByLatLon', async ({lat, lon}, { rejectWithValue }) => {
  try {
    return await WeatherAPI.getWeatherByLatLon(lat, lon);
  } catch (e) {
    return rejectWithValue(e);
  }
});

// export const getWeatherByLatLon = createAsyncThunk('weather/getWeatherByLatLon', ({lat, lon}) => {
//   return new Promise((resolve, _) => {
//     WeatherAPI.getWeatherByLatLon(lat, lon).then((response) => {
//       resolve(response)
//     });
//   })
// });

export const getWeatherByCity = createAsyncThunk('weather/getWeatherByCity', async ({city}, { rejectWithValue }) => {
  try {
    return await WeatherAPI.getWeatherByCity(city);
  } catch (e) {
    return rejectWithValue(e);
  }
});