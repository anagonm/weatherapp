import { render, screen, fireEvent } from '@testing-library/react';
import { fetchAirPolutionMockedResponse } from '../../../api/__test__/airPollution.spec';
import { forecastApiMockedResponse } from '../../../api/__test__/forecast.spec';
import { weatherApiMockedResponse } from '../../../api/__test__/weather.spec';
import { WeatherContext } from '../../../providers/weatherContext';
import Dashboard from '../Dashboard';

describe("Dashboard", () => {

  const hideError = jest.fn();
  const setCity = jest.fn();
  const setLat = jest.fn();
  const setLon = jest.fn();
  const dispatch = jest.fn();
  const searchByCity = jest.fn();
  const generateLink = jest.fn();
  const resetApp = jest.fn();
  const hideModal = jest.fn();
  const hideInfo = jest.fn();

  const defaultContextValueMock = {
    error: undefined,
    hideError,
    city: '',
    setCity,
    lat: -80.1747,
    setLat,
    lon: 25.9445,
    setLon,
    weatherData: {
      loading: false,
      error: false,
      data: weatherApiMockedResponse
    },
    airPollutionData: {
      loading: false,
      error: false,
      data: fetchAirPolutionMockedResponse,
    },
    forecast: {
      loading: false,
      error: false,
      data: forecastApiMockedResponse
    },
    dispatch,
    searchByCity,
    generateLink,
    resetApp,
    steps: [],
    modal: false,
    hideModal,
    info: undefined,
    hideInfo
  }

  const renderComponent = (contextValue = defaultContextValueMock) => {
    render(
      <WeatherContext.Provider value={contextValue}>
        <Dashboard />
      </WeatherContext.Provider>
    )
  }

  it("renders the dashboard", () => {
    renderComponent()
    const divMainContainer = screen.getByTestId("main-container")
    // console.log(screen.debug());
    expect(divMainContainer).toBeVisible();
  });

  it("renders welcome modal", () => {
    localStorage.clear();
    renderComponent({...defaultContextValueMock, modal: true})
    const modalContainer = screen.getByTestId("modal-container")
    expect(modalContainer).toBeVisible();
  })

  it("hides the welcome modal after clicking continue", async() => {
    localStorage.clear();
    renderComponent({...defaultContextValueMock, modal: true})

    let modalContainer = screen.getByTestId("modal-container")
    expect(modalContainer).toBeVisible();

    const btnHideModal = screen.getByTestId("hide-modal-btn");
    expect(btnHideModal).toBeVisible();

    await fireEvent.click(btnHideModal);

    expect(hideModal).toHaveBeenCalled()
  })
})