import fetchMock from "jest-fetch-mock";
import { getWeatherByCity, getWeatherByLatLon } from "../weather";
import { ERROR_INVALID_CITY, ERROR_INVALID_LAT_LON } from "../../utils/constants";

fetchMock.enableMocks();

export const weatherApiMockedResponse = {
  "coord": {
     "lon": -80.1747,
     "lat": 25.9445
  },
  "weather": [
     {
        "id": 802,
        "main": "Clouds",
        "description": "scattered clouds",
        "icon": "03d"
     }
  ],
  "base": "stations",
  "main": {
     "temp": 301.23,
     "feels_like": 305.29,
     "temp_min": 299.82,
     "temp_max": 302.16,
     "pressure": 1013,
     "humidity": 79
  },
  "visibility": 10000,
  "wind": {
     "speed": 3.09,
     "deg": 330
  },
  "clouds": {
     "all": 40
  },
  "dt": 1665761018,
  "sys": {
     "type": 2,
     "id": 2037247,
     "country": "US",
     "sunrise": 1665746332,
     "sunset": 1665788050
  },
  "timezone": -14400,
  "id": 4166233,
  "name": "North Miami Beach",
  "cod": 200
};


describe("weatherApi", () => {
  const latitude = 25.9445;
  const longitude = -80.1747;
  const city = "North Miami Beach";
  const invaliCity = "North Miami Beac"

  const weatherApiCityInvalidMockedResponse = {
    "cod": "404",
    "message": "city not found"
  }

  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("returns weather data from the OpenWeather API by lat and lon", async () => {
    fetch.mockResponseOnce(JSON.stringify(weatherApiMockedResponse));
    const weatherApiResponse = await getWeatherByLatLon(latitude, longitude);
    expect(weatherApiResponse).toEqual(weatherApiMockedResponse);
  })

  it("returns weather data from the OpenWeather API by city", async () => {
    fetch.mockResponseOnce(JSON.stringify(weatherApiMockedResponse));
    const weatherApiResponse = await getWeatherByCity(city);
    expect(weatherApiResponse).toEqual(weatherApiMockedResponse);
  })

  it("returns an error if invalid city", async () => {
    fetch.mockResponseOnce(JSON.stringify(weatherApiCityInvalidMockedResponse));
    const weatherApiResponse = await getWeatherByCity(invaliCity);
    expect(weatherApiResponse).toEqual(weatherApiCityInvalidMockedResponse);
  })

  it("returns an error if missing city", async () => {
    let result = null;
    try {
      await getWeatherByCity(); // Missing city
    } catch(e) {
      result = e
    }
    expect(result).toEqual({"message": ERROR_INVALID_CITY});
  })

  it("returns an error if missing lat and lon", async () => {
    let result = null;

    try {
      await getWeatherByLatLon(); // Missing lat and lon
    } catch(e) {
      result = e
    }

    expect(result).toEqual({"message": ERROR_INVALID_LAT_LON});
  })

})