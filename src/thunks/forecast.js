import { createAsyncThunk } from "@reduxjs/toolkit";
import * as ForecastAPI from '../api/forecast';


export const getForecastByLatLon = createAsyncThunk('forecast/getForecast', async ({lat, lon}, { rejectWithValue }) => {
  try {
    return await ForecastAPI.getForecastByLatLon(lat, lon);
  } catch (e) { // => {message, cod}
    return rejectWithValue(e);
  }
});

export const getForecastByCity = createAsyncThunk('forecast/getForecastByCity', async ({city}, { rejectWithValue }) => {
  try {
    return await ForecastAPI.getForecastByCity(city);
  } catch (e) {
    return rejectWithValue(e);
  }
});