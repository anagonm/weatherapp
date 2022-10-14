import { BASE_URL_WEATHER, ERROR_INVALID_LAT_LON, fetchData } from "./common";

export const getAirPollutionByLatLon = async (lat_, lon_) => {
  if (!lat_ || !lon_) {
    throw ERROR_INVALID_LAT_LON;
  }

  const baseUrl = BASE_URL_WEATHER + "/air_pollution";
  const params = `lat=${lat_}&lon=${lon_}`;
  return await fetchData(baseUrl, params);
}
