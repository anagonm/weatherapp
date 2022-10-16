import { createSlice } from '@reduxjs/toolkit';
import { getAirPollutionByLatLon } from '../thunks/airPollution';

const initialState = {
  loading: false,
  error: undefined,
  data: {}
}

export const airPollutionSlice = createSlice({
  name: 'airPollution',
  initialState,
  reducers: {},
  extraReducers: {
    [getAirPollutionByLatLon.pending]: (state) => {
      state.loading = true;
    },
    [getAirPollutionByLatLon.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    },
    [getAirPollutionByLatLon.rejected]: (state, { payload }) => {
      const { message } = payload;
      state.error = message;
      state.loading = false;
    },
  }
})

// export const { setLoading, setData } = weatherSlice.actions

export default airPollutionSlice.reducer;
