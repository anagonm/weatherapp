import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as ForecastAPI from '../api/forecast';

export const getForecastByLatLon = createAsyncThunk('forecast/getForecast', async ({lat, lon}) => {
  const response = await ForecastAPI.getForecastByLatLon(lat, lon);
  return response;
});

export const getForecastByCity = createAsyncThunk('forecast/getForecastByCity', async ({city}) => {
  const response = await ForecastAPI.getForecastByCity(city);
  return response;
});

const initialState = {
  loading: false,
  error: false,
  success: false,
  data: {}
}

export const forecastSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {},
  extraReducers: {
    [getForecastByLatLon.pending]: (state) => {
      state.loading = true
    },
    [getForecastByLatLon.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.data = payload
    },
    [getForecastByLatLon.rejected]: (state) => {
      state.loading = false
    },
    [getForecastByCity.pending]: (state) => {
      state.loading = true
    },
    [getForecastByCity.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload
    },
    [getForecastByCity.rejected]: (state) => {
      state.loading = false
    }
  }
})

// export const { setLoading, setData } = weatherSlice.actions

export default forecastSlice.reducer