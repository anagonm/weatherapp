import { fireEvent, render, screen } from "@testing-library/react";
import Notification from "../Notification";
import { store } from "../../store/store";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { WeatherProvider } from "../../providers/weatherProvider";
import * as WeatherAPI from '../../api/weather';
import * as ForecastAPI from '../../api/forecast';
import * as AirPollutionAPI from '../../api/airPollution';
import * as Utils from '../../utils/index';
import Dashboard from "../Dashboard";
import { weatherApiMockedResponse } from "../../api/__test__/weather.spec";
import { fetchAirPolutionMockedResponse } from "../../api/__test__/airPollution.spec";
import { forecastApiMockedResponse } from "../../api/__test__/forecast.spec";

describe("Notification", () => {


  const wrapper = ({ children }) => {
    return (
      <Provider store={store}>
        <WeatherProvider>
          {children}
        </WeatherProvider>
      </Provider>
    );
  }

  it("renders error notification", () => {
    render(<Notification message='city not found' hideNotification={() => {}} type='error' />);

    const div = screen.getByTestId("notification");
    const icon = screen.getByTestId("error-icon")

    expect(div).toBeVisible();
    expect(div).toHaveClass("error");
    expect(div.textContent).toEqual('city not found');
    expect(icon).toBeVisible();
  });

  it("renders info notification", () => {
    render(<Notification message='URL was copied to clipboard' hideNotification={() => {}} type='info' />);

    const div = screen.getByTestId("notification");

    expect(div).toBeVisible();
    expect(div).toHaveClass("info");
    expect(div.textContent).toEqual('URL was copied to clipboard');
  });

  it("close error notification", async () => {

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
      return Promise.reject({ message: "city not found" });
    });

    jest.spyOn(WeatherAPI, "getWeatherByCity").mockImplementation(( ) => {
      return Promise.reject({ message: "city not found" });
    });

    render(<Dashboard />, { wrapper });

    const searchInput = screen.getByTestId('input-search-by-city'); // input data-testid=input-search-by-city
    const searchButton = screen.getByTestId('btn-search');

    fireEvent.change(searchInput, {target: { value: 'Madrid' }});

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      await fireEvent.click(searchButton);
    });

    const div = screen.getByTestId("notification");
    expect(div.textContent).toEqual("city not found");
    const closeIcon = screen.getByTestId("close-icon");

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act( async () => {
      await fireEvent.click(closeIcon);
    });

    expect(div).not.toBeVisible();
  });

})