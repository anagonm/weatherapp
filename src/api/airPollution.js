import { ERROR_INVALID_LAT_LON, BASE_URL_WEATHER } from "../utils/constants";
import { fetchData } from "./common";

export const getAirPollutionByLatLon = async (lat_, lon_) => {
  if (!lat_ || !lon_) {
    const error = { message: ERROR_INVALID_LAT_LON };
    throw error;
  }

  const baseUrl = BASE_URL_WEATHER + "/air_pollution";
  const params = `lat=${lat_}&lon=${lon_}`;
  return await fetchData(baseUrl, params);
}
