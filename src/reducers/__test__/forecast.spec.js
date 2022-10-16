import { configureStore } from "@reduxjs/toolkit";
import * as ForecastApi from "../../api/forecast";
import { forecastSlice } from "../forecast";
import { getForecastByLatLon, getForecastByCity } from "../../thunks/forecast";

describe('forecastReducer', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should get data fulfilled with lat and lon', async () => {
    jest.spyOn(ForecastApi , "getForecastByLatLon").mockResolvedValueOnce({ sample: "info" });
    const store = configureStore({ reducer: forecastSlice.reducer });
    await store.dispatch(getForecastByLatLon({lat:1, lon:1}));
    expect(store.getState()).toEqual({
      loading: false,
      error: undefined,
      data: { sample: "info" }
    });
  });

  it("should get the error when rejected with lat and lon", async () => {
    jest.spyOn(ForecastApi, "getForecastByLatLon").mockRejectedValueOnce({ message: "my error"});
    const store = configureStore({ reducer: forecastSlice.reducer });
    await store.dispatch(getForecastByLatLon({lat:1, lon:1}));
    expect(store.getState()).toEqual({
      loading: false,
      error: "my error",
      data: {}
    });
  });

  it("should get data fulfilled with city", async () => {
    jest.spyOn(ForecastApi, "getForecastByCity").mockResolvedValueOnce({sample: "info"});
    const store = configureStore({ reducer: forecastSlice.reducer });
    await store.dispatch(getForecastByCity("Miami"));
    expect(store.getState()).toEqual({
      loading: false,
      error: undefined,
      data: { sample: "info" }
    });
  });

  it('should get the error when rejected with city', async () => {
    jest.spyOn(ForecastApi, "getForecastByCity").mockRejectedValueOnce({ message: "my error" });
    const store = configureStore({ reducer: forecastSlice.reducer });
    await store.dispatch(getForecastByCity('Miamiii'));
    expect(store.getState()).toEqual({
      loading: false,
      error: "my error",
      data: {}
    });
  });
})