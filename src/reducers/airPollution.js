import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as AirPollutionAPI from '../api/airPollution';

export const getAirPollutionByLatLon = createAsyncThunk('airPollution/getAirPollution', async ({lat, lon}) => {
  const response = await AirPollutionAPI.getAirPollutionByLatLon(lat, lon);
  return response;
});

const initialState = {
  loading: false,
  error: false,
  success: false,
  data: {}
}

export const airPollutionSlice = createSlice({
  name: 'airPollution',
  initialState,
  reducers: {},
  extraReducers: {
    [getAirPollutionByLatLon.pending]: (state) => {
      state.loading = true
    },
    [getAirPollutionByLatLon.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.data = payload
    },
    [getAirPollutionByLatLon.rejected]: (state) => {
      state.loading = false
    },
  }
})

// export const { setLoading, setData } = weatherSlice.actions

export default airPollutionSlice.reducer