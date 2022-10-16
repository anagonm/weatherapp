import { createAsyncThunk } from "@reduxjs/toolkit";
import * as AirPollutionAPI from '../api/airPollution';

export const getAirPollutionByLatLon = createAsyncThunk('airPollution/getAirPollution', async ({lat, lon}, { rejectWithValue }) => {
  try {
    return await AirPollutionAPI.getAirPollutionByLatLon(lat, lon);
  } catch (e) {
    return rejectWithValue(e);
  }
});