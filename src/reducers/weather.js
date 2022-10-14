import { createSlice } from '@reduxjs/toolkit'
import { getWeatherByCity, getWeatherByLatLon } from '../thunks/weather';

const initialState = {
  loading: false,
  error: undefined,
  success: false,
  data: {}
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    //   setLoading: (state, action) => {
    //     const { payload } = action;
    //     state.loading = payload;
    //   },
    //   setData: (state, action) => {
    //     const { payload } = action;
    //     state.data = payload;
    //   }
    setError: (state, action) => {
      const { payload } = action;
      state.error = payload;
    }
  },
  extraReducers: {
    [getWeatherByLatLon.pending]: (state) => {
      state.error = undefined;
      state.loading = true;
    },
    [getWeatherByLatLon.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.data = payload
    },
    [getWeatherByLatLon.rejected]: (state, { payload }) => {
      const { message } = payload;
      state.error = message;
      state.loading = false
    },
    [getWeatherByCity.pending]: (state) => {
      state.error = undefined;
      state.loading = true
    },
    [getWeatherByCity.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload
    },
    [getWeatherByCity.rejected]: (state, { payload }) => {
      const { message } = payload;
      state.error = message;
      state.loading = false
    }
  }
})

// Action creators are generated for each case reducer function
export const { setError } = weatherSlice.actions

export default weatherSlice.reducer