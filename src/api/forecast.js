import { BASE_URL_WEATHER, fetchData } from "./common";

export const getForecastByLatLon = async (lat_, lon_) => {
  const baseUrl = BASE_URL_WEATHER + "/forecast";
  const params = `lat=${lat_}&lon=${lon_}`;
  return await fetchData(baseUrl, params);
}

export const getForecastByCity = async (city_) => {
  const baseUrl = BASE_URL_WEATHER + "/forecast";;
  const params = `q=${city_}`;
  return await fetchData(baseUrl, params);
};