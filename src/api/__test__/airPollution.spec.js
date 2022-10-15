import fetchMock from "jest-fetch-mock";
import { getAirPollutionByLatLon } from "../airPollution";
import { ERROR_INVALID_LAT_LON } from "../../utils/constants";

fetchMock.enableMocks();

export const fetchAirPolutionMockedResponse = {
  "coord": {
    "lon": -80.1747,
    "lat": 25.9445
  },
  "list": [
    {
      "main": {
        "aqi": 1
      },
      "components": {
        "co": 387.19,
        "no": 19,
        "no2": 14.74,
        "o3": 0.04,
        "so2": 2.53,
        "pm2_5": 5.84,
        "pm10": 7.85,
        "nh3": 1.03
      },
      "dt": 1665748356
    }
  ]
};

describe("AirPolutionAPI", () => {
  // Variables and function params for a success case
  const latitude = -80.1747;
  const longitude = 25.9445;

  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("returns data from the OpenWeather API", async () => {
    fetch.mockResponseOnce(JSON.stringify(fetchAirPolutionMockedResponse));
    const openWeatherAPIResponse = await getAirPollutionByLatLon(latitude, longitude);
    expect(openWeatherAPIResponse).toEqual(fetchAirPolutionMockedResponse);
  })

  it("returns and error if invalid data", async () => {
    let result = null;

    try {
      await getAirPollutionByLatLon(); // Missing params
    } catch(e) {
      result = e
    }

    expect(result).toMatch(ERROR_INVALID_LAT_LON);
  })
})