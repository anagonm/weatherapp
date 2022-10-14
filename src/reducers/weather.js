import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as WeatherAPI from '../api/weather';

export const getWeatherByLatLon = createAsyncThunk('weather/getWeatherByLatLon', async ({lat, lon}) => {
  const response = await WeatherAPI.getWeatherByLatLon(lat, lon);
  return response;
});

// export const getWeatherByLatLon = createAsyncThunk('weather/getWeatherByLatLon', ({lat, lon}) => {
//   return new Promise((resolve, _) => {
//     WeatherAPI.getWeatherByLatLon(lat, lon).then((response) => {
//       resolve(response)
//     });
//   })
// });

export const getWeatherByCity = createAsyncThunk('weather/getWeatherByCity', async ({city}) => {
  const response = await WeatherAPI.getWeatherByCity(city);
  return response;
});

const initialState = {
  loading: false,
  error: false,
  success: false,
  data: {}
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      const { payload } = action;
      state.loading = payload;
    },
    setData: (state, action) => {
      const { payload } = action;
      state.data = payload;
    }
  },

  extraReducers: {
    [getWeatherByLatLon.pending]: (state) => {
      state.loading = true
    },
    [getWeatherByLatLon.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.data = payload
    },
    [getWeatherByLatLon.rejected]: (state) => {
      state.loading = false
    },
    [getWeatherByCity.pending]: (state) => {
      state.loading = true
    },
    [getWeatherByCity.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload
    },
    [getWeatherByCity.rejected]: (state) => {
      state.loading = false
    }
  }
})

// Action creators are generated for each case reducer function
export const { setLoading, setData } = weatherSlice.actions

export default weatherSlice.reducer