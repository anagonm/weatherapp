import { BASE_URL_WEATHER, fetchData } from "./common";

export const getAirPollutionByLatLon = async (lat_, lon_) => {
  const baseUrl = BASE_URL_WEATHER + "/air_pollution";
  const params = `lat=${lat_}&lon=${lon_}`;
  return await fetchData(baseUrl, params);
}
