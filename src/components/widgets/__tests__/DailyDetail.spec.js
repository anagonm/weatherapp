import { render, screen } from "@testing-library/react";
import DailyDetail from "../DailyDetail";

describe("DailyDetail", () => {
  const description = "My description";

  const dataMock = {
    dt: 1666048008,
    clouds: {},
    main: {},
    weather: [
      { icon: "icon", description }
    ]
  }

  it("renders with data", () => {
    render(<DailyDetail data={dataMock} />);

    const div = screen.getByTestId("daily-item");
    expect(div).toBeVisible();

    const pDescription = screen.getByTestId("daily-description");
    expect(pDescription).toBeVisible();    
    expect(pDescription.textContent).toEqual(description);
  });

  it('renders null if no data is passed to the component in the props', () => {
    const { container } = render(<DailyDetail />);
    expect(container.innerHTML).toBe("");
  })


})