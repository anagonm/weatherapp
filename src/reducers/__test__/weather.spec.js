import { configureStore } from '@reduxjs/toolkit';
import { weatherSlice } from '../weather';
import * as WeatherAPI from '../../api/weather';
import { getWeatherByLatLon, getWeatherByCity } from '../../thunks/weather';

describe('weatherReducer', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should get data fulfilled with lat and lon', async () => {
    jest.spyOn(WeatherAPI, "getWeatherByLatLon").mockResolvedValueOnce({ sample: "info"});
    const store = configureStore({ reducer: weatherSlice.reducer });
    await store.dispatch(getWeatherByLatLon({lat: 1, lon: 1}));
    expect(store.getState()).toEqual({
      loading: false,
      error: undefined,
      data: { sample: "info" }
    });
  });

  it('should get the error when rejected with lat and lon', async () => {
    jest.spyOn(WeatherAPI, "getWeatherByLatLon").mockRejectedValueOnce({ message: "my error"});
    const store = configureStore({ reducer: weatherSlice.reducer });
    await store.dispatch(getWeatherByLatLon({lat: 1, lon: 1}));
    expect(WeatherAPI.getWeatherByLatLon).toHaveBeenCalledWith(1, 1);
    expect(store.getState()).toEqual({
      loading: false,
      error: "my error",
      data: {}
    });
  });
});

it('should post data fulfilled with city', async () => {
  jest.spyOn(WeatherAPI, "getWeatherByCity").mockResolvedValueOnce({ sample: "info"});
  const store = configureStore({ reducer: weatherSlice.reducer });
  await store.dispatch(getWeatherByCity('Miami'));
  expect(store.getState()).toEqual({
    loading: false,
    error: undefined,
    data: { sample: "info" }
  });
});

it('should get the error when rejected with city', async () => {
  jest.spyOn(WeatherAPI, "getWeatherByCity").mockRejectedValueOnce({ message: "my error" });
  const store = configureStore({ reducer: weatherSlice.reducer });
  await store.dispatch(getWeatherByCity({city: 'InvalidCityName'}));
  expect(WeatherAPI.getWeatherByCity).toHaveBeenCalledWith("InvalidCityName");
  expect(store.getState()).toEqual({
    loading: false,
    error: "my error",
    data: {}
  });
});
