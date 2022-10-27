import { render, screen } from "@testing-library/react"
import { weatherApiMockedResponse } from "../../../api/__test__/weather.spec"
import { WeatherContext } from "../../../providers/weatherContext"
import CurrentWidget from "../CurrentWidget"

describe("CurrentWidget", () => {
  const contextValueMocked = {
    weatherData: {
      loading: true
    }
  }

  const renderComponent = (contextValue = contextValueMocked, propsValues = {}) => {
    render(
      <WeatherContext.Provider value={contextValue}>
        <CurrentWidget {...propsValues} />
      </WeatherContext.Provider>
    )
  }

  it("renders is loading if airPollutionData.loading is true", () => {
    renderComponent();
    const loadingComponent = screen.getByTestId("rotating-lines-svg")
    expect(loadingComponent).toBeVisible();
  })

  it("renders is loading if airPollutionData.data is empty", () => {
    renderComponent({
      weatherData: {
        loading: false,
        data: {}
      }
    });
    const loadingComponent = screen.getByTestId("rotating-lines-svg")
    expect(loadingComponent).toBeVisible();
  })

  it('renders if items present', () => {
    renderComponent({
      weatherData: {
        loading: false,
        data: weatherApiMockedResponse
      }
    });
    const title = screen.getByTestId("city-name")
    expect(title).toBeVisible();
    expect(title).toHaveTextContent("North Miami Beach")
  })


})