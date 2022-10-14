import { BASE_URL_WEATHER, fetchData } from "./common";

export const getWeatherByLatLon = async (lat_, lon_) => {
  const baseUrl = BASE_URL_WEATHER + "/weather";
  const params = `lat=${lat_}&lon=${lon_}`;
  return await fetchData(baseUrl, params);
}

export const getWeatherByCity = async (city_) => {
  const baseUrl = BASE_URL_WEATHER + "/weather";;
  const params = `q=${city_}`;

  return await fetchData(baseUrl, params);
};

// export const getWeatherByLatLon = (lat_, lon_) => {
//   const baseUrl = BASE_URL_WEATHER;
//   const params = `lat=${lat_}&lon=${lon_}`;

//   return new Promise((resolve, reject) => {
//     fetchData(baseUrl, params).then(result => {
//       resolve(result);
//     });
//   })
// }