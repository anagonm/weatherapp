import { BASE_URL_WEATHER, ERROR_INVALID_CITY, ERROR_INVALID_LAT_LON, fetchData } from "./common";

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