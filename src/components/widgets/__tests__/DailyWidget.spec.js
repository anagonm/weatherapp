import { render, screen } from '@testing-library/react';
import { weatherApiMockedResponse } from '../../../api/__test__/weather.spec';
import { WeatherContext } from '../../../providers/weatherContext';
import DailyWidget from '../DailyWidget';

describe("DailyWidget", () => {
  const contextValueMocked = {
    forecast: {
      loading: true
    }
  }

  const renderComponent = (contextValue = contextValueMocked, propsValues = {}) => {
    render(
      <WeatherContext.Provider value={contextValue}>
        <DailyWidget {...propsValues} />
      </WeatherContext.Provider>
    )
  }

  it("renders is loading if forecast.loading is true", () => {
    renderComponent();
    const loadingComponent = screen.getByTestId("rotating-lines-svg")
    expect(loadingComponent).toBeVisible();
  })

  it("renders is loading if forecast.data is empty", () => {
    renderComponent({
      forecast: {
        loading: false,
        data: {}
      }
    });
    const loadingComponent = screen.getByTestId("rotating-lines-svg")
    expect(loadingComponent).toBeVisible();
  })

  it('renders if items present', () => {
    renderComponent({
      forecast: {
        loading: false,
        data: weatherApiMockedResponse
      }
    });
    const title = screen.getByTestId("daily-widget-title")
    expect(title).toBeVisible();
    expect(title).toHaveTextContent("Forecast next 5 days")
  })
})