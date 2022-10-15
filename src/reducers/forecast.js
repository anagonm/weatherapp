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
      console.log("DEBUG @@", 1)
      state.loading = true
    },
    [getForecastByLatLon.fulfilled]: (state, { payload }) => {
      console.log("DEBUG @@", 2)
      state.loading = false
      state.data = payload
    },
    [getForecastByLatLon.rejected]: (state, { payload }) => {
      console.log("DEBUG @@", 3)
      const { message } = payload;
      state.error = message;
      state.loading = false
    },
    [getForecastByCity.pending]: (state) => {
      console.log("DEBUG @@", 4)
      state.loading = true
    },
    [getForecastByCity.fulfilled]: (state, { payload }) => {
      console.log("DEBUG @@", 5)
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