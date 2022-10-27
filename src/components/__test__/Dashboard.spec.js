/* eslint-disable no-undef */
import React from 'react';
import { Provider } from 'react-redux';
import { WeatherProvider } from '../../providers/weatherProvider';
import Dashboard from '../Dashboard';

import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { fetchAirPolutionMockedResponse } from '../../api/__test__/airPollution.spec';
import { forecastApiMockedResponse } from '../../api/__test__/forecast.spec';
import { weatherApiMockedResponse } from '../../api/__test__/weather.spec';
import * as WeatherAPI from '../../api/weather';
import * as ForecastAPI from '../../api/forecast';
import * as AirPollutionAPI from '../../api/airPollution';
import * as Utils from '../../utils/index';
import { store } from '../../store/store';

describe('Dashboard', () => {

  const wrapper = ({ children }) => {
    return (
      <Provider store={store}>
        <WeatherProvider>
          {children}
        </WeatherProvider>
      </Provider>
    );
  }

  it('hides the welcome modal after clicking continue', async () => {
    localStorage.clear();

    render(<Dashboard />, { wrapper });
    const modalContainer = screen.getByTestId('modal-container'); // <div data-testid="modal-container">
    expect(modalContainer).toBeVisible();

    const btnHideModal = screen.getByTestId('hide-modal-btn');  // <button data-testid="hide-modal-btn" onClick={() => dispatch(actionAsyncThunk)}> // await API.get
     expect(btnHideModal).toBeVisible();

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      await fireEvent.click(btnHideModal);
    })

    expect(modalContainer).not.toBeVisible();
  });

  describe("Search", () => {
    it("search by city and the new data is update in the view", async () => {

      jest.spyOn(Utils, "getLocalStorageItem").mockImplementation(() => {
        return { lat: 100, lon: 100 }
      });

      jest.spyOn(Utils, "getBrowserGeoPosition").mockImplementation(() => {
        return Promise.resolve({ latitude: 100, longitude: 100 })
      });

      jest.spyOn(WeatherAPI, "getWeatherByLatLon").mockImplementation(( ) => {
        return Promise.resolve({...weatherApiMockedResponse});
      });

      jest.spyOn(AirPollutionAPI, "getAirPollutionByLatLon").mockImplementation(() => {
        return Promise.resolve({...fetchAirPolutionMockedResponse});
      });

      jest.spyOn(ForecastAPI, "getForecastByLatLon").mockImplementation(( ) => {
        return Promise.resolve({...forecastApiMockedResponse });
      });

      // to search by mocks

      jest.spyOn(ForecastAPI, "getForecastByCity").mockImplementation(( ) => {
        return Promise.resolve({...forecastApiMockedResponse,
          city: {
            ...forecastApiMockedResponse.city,
            name: "Madrid"
          }
          });
      });

      jest.spyOn(WeatherAPI, "getWeatherByCity").mockImplementation(( ) => {
        return Promise.resolve({...weatherApiMockedResponse, name: "Madrid"});
      });

      render(<Dashboard />, { wrapper });
  
      const searchInput = screen.getByTestId('input-search-by-city'); // input data-testid=input-search-by-city
      const searchButton = screen.getByTestId('btn-search');

      fireEvent.change(searchInput, {target: { value: 'Madrid' }});

      // eslint-disable-next-line testing-library/no-unnecessary-act
      await act(async () => {
        await fireEvent.click(searchButton);
      });

      expect(ForecastAPI.getForecastByCity).toHaveBeenCalled();
      expect(WeatherAPI.getWeatherByCity).toHaveBeenCalled();

      const locationWeather = screen.getByTestId('city-name'); // div 
      expect(locationWeather.textContent).toEqual('Madrid');

    });
  });

});
