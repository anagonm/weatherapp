import { render, screen } from "@testing-library/react"
import { weatherApiMockedResponse } from "../../../api/__test__/weather.spec"
import { WeatherContext } from "../../../providers/weatherContext"
import { getHour } from "../../../utils"
import AdditionalWidget from "../AdditionalWidget"

describe("AdditionalWidget", () => {
  const contextValueMocked = {
    weatherData: {
      loading: true
    }
  }

  const renderComponent = (contextValue = contextValueMocked, propsValues = {}) => {
    render(
      <WeatherContext.Provider value={contextValue}>
        <AdditionalWidget {...propsValues} />
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
    const sunrise = screen.getByTestId("sunrise")
    const sunset = screen.getByTestId("sunset")

    expect(sunrise).toBeVisible();
    expect(sunrise).toHaveTextContent(getHour(1665746332))

    expect(sunset).toBeVisible();
    expect(sunset).toHaveTextContent(getHour(1665788050))
  })


})