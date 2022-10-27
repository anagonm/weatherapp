import { render, screen } from "@testing-library/react"
import { fetchAirPolutionMockedResponse } from "../../../api/__test__/airPollution.spec"
import { WeatherContext } from "../../../providers/weatherContext"
import AirPollutionWidget from "../AirPollutionWidget"

describe("AirPollutionWidget", () => {
  const contextValueMocked = {
    airPollutionData: {
      loading: true
    }
  }

  const renderComponent = (contextValue = contextValueMocked, propsValues = {}) => {
    render(
      <WeatherContext.Provider value={contextValue}>
        <AirPollutionWidget {...propsValues} />
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
      airPollutionData: {
        loading: false,
        data: {}
      }
    });
    const loadingComponent = screen.getByTestId("rotating-lines-svg")
    expect(loadingComponent).toBeVisible();
  })

  it('renders if items present', () => {
    renderComponent({
      airPollutionData: {
        loading: false,
        data: fetchAirPolutionMockedResponse
      }
    });
    const title = screen.getByTestId("airpollution-widget-title")
    const co = screen.getByTestId("airpollution-co")

    expect(title).toBeVisible();
    expect(title).toHaveTextContent("Your Current Air Pollution")
    expect(co).toHaveTextContent("387.19")
  })


})