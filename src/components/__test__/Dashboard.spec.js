/* eslint-disable no-undef */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { fetchAirPolutionMockedResponse } from '../../api/__test__/airPollution.spec';
import { forecastApiMockedResponse } from '../../api/__test__/forecast.spec';
import { weatherApiMockedResponse } from '../../api/__test__/weather.spec';
import * as WeatherAPI from '../../api/weather';
import * as ForecastAPI from '../../api/forecast';
import * as AirPollutionAPI from '../../api/airPollution';
import * as Utils from '../../utils/index';
import { WeatherProvider } from '../../providers/weatherProvider';
import { store } from '../../store/store';
import Dashboard from '../Dashboard';
import { act } from 'react-dom/test-utils';

describe('Dashboard', () => {
  it('hides the welcome modal after clicking continue x', async () => {
    const wrapper = ({ children }) => (
      <Provider store={store}>
        <WeatherProvider>
          {children}
        </WeatherProvider>
      </Provider>
    );

    localStorage.clear();
    render(<Dashboard />, { wrapper });
    const modalContainer = screen.getByTestId('modal-container');
    expect(modalContainer).toBeVisible();

    const btnHideModal = screen.getByTestId('hide-modal-btn');
    expect(btnHideModal).toBeVisible();
    await fireEvent.click(btnHideModal);

    expect(modalContainer).not.toBeVisible();
  });

  describe("Search", () => {
    it("search by city and the new data is update in the view", async () => {
      jest.spyOn(ForecastAPI, "getForecastByCity").mockImplementation(( ) => {
        return Promise.resolve({...forecastApiMockedResponse,
          city: {
            ...forecastApiMockedResponse.city,
            name: "Madrid"
          }
          });
      });

      jest.spyOn(ForecastAPI, "getForecastByLatLon").mockImplementation(( ) => {
        return Promise.resolve({...forecastApiMockedResponse });
      });

      jest.spyOn(AirPollutionAPI, "getAirPollutionByLatLon").mockImplementation(() => {
        return Promise.resolve({...fetchAirPolutionMockedResponse})
      })

      jest.spyOn(WeatherAPI, "getWeatherByCity").mockImplementation(( ) => {
        return Promise.resolve({...weatherApiMockedResponse, name: "Madrid"});
      });

      jest.spyOn(WeatherAPI, "getWeatherByLatLon").mockImplementation(( ) => {
        return Promise.resolve({...weatherApiMockedResponse});
      });

      jest.spyOn(Utils, "getBrowserGeoPosition").mockImplementation(() => {
        return Promise.resolve({ latitude: 100, longitude: 100 })
      });

      jest.spyOn(Utils, "getLocalStorageItem").mockImplementation(() => {
        return { lat: 100, lon: 100 }
      });

      const wrapper = ({ children }) => (
        <Provider store={store}>
          <WeatherProvider>
            {children}
          </WeatherProvider>
        </Provider>
      );

      // eslint-disable-next-line testing-library/no-unnecessary-act
      render(<Dashboard />, { wrapper });
  
      const searchInput = screen.getByTestId('input-search-by-city');
      const searchButton = screen.getByTestId('btn-search');

      fireEvent.change(searchInput, {target: { value: 'Madrid' }});

      // eslint-disable-next-line testing-library/no-unnecessary-act
      await act(async () => {
        await fireEvent.click(searchButton);
      });

      expect(ForecastAPI.getForecastByCity).toHaveBeenCalled()

      const locationWeather = screen.getByTestId('city-name');
      await screen.findByText('Madrid')
      expect(locationWeather.textContent).toEqual('Madrid');

    });
  })


});
