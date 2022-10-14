import { createSlice } from '@reduxjs/toolkit'
import { getForecastByCity, getForecastByLatLon } from '../thunks/forecast'

const initialState = {
  loading: false,
  error: undefined,
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
    [getForecastByLatLon.rejected]: (state, { payload }) => {
      const { message } = payload;
      state.error = message;
      state.loading = false
    },
    [getForecastByCity.pending]: (state) => {
      state.loading = true
    },
    [getForecastByCity.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload
    },
    [getForecastByCity.rejected]: (state, { payload }) => {
      const { message } = payload;
      state.error = message;
      state.loading = false
    }
  }
})

export default forecastSlice.reducer