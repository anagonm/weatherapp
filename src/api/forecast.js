import { fetchData } from "./common";
import { ERROR_INVALID_LAT_LON, ERROR_INVALID_CITY, BASE_URL_WEATHER } from "../utils/constants";

export const getForecastByLatLon = async (lat_, lon_) => {
  if (!lat_ || !lon_) {
    throw(ERROR_INVALID_LAT_LON);
  }

  const baseUrl = BASE_URL_WEATHER + "/forecast";
  const params = `lat=${lat_}&lon=${lon_}`;
  return await fetchData(baseUrl, params);
}

export const getForecastByCity = async (city_) => {
  if (!city_) {
    throw(ERROR_INVALID_CITY);
  }

  const baseUrl = BASE_URL_WEATHER + "/forecast";;
  const params = `q=${city_}`;
  return await fetchData(baseUrl, params);
};