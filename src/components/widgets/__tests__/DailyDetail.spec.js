import { render, screen } from "@testing-library/react"
import DailyDetail from "../DailyDetail"

describe("DailyDetail", () => {
  const data= {
    dt: 1666048008,
    clouds: {},
    main: {},
    weather: [
      { icon: "icon", description: "My description" }
    ]
  }

  it("renders with data", () => {
    render(<DailyDetail data={data} />)
    const div = screen.getByTestId("daily-item")
    const pDescription = screen.getByTestId("daily-description")
    expect(div).toBeVisible();
    expect(pDescription.textContent).toEqual("My description")
  })

})