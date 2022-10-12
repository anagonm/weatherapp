export const API_KEY          = "bf1548ea41975ce03a084e2e8c1501bf";
export const BASE_URL_WEATHER = "https://api.openweathermap.org/data/2.5/weather";

export const fetchData = async (url, params) => {
  const fullUrl = `${url}?${params}&appid=${API_KEY}`
  const rawResponse = await fetch(fullUrl);
  const response = await rawResponse.json();
  return response;
}

export const getWeatherByLatLon = async (lat_, lon_) => {
  const baseUrl = BASE_URL_WEATHER;
  const params = `lat=${lat_}&lon=${lon_}`;
  return await fetchData(baseUrl, params);
}

// export const getWeatherByLatLon = (lat_, lon_) => {
//   const baseUrl = BASE_URL_WEATHER;
//   const params = `lat=${lat_}&lon=${lon_}`;

//   return new Promise((resolve, reject) => {
//     fetchData(baseUrl, params).then(result => {
//       resolve(result);
//     });
//   })
// }

export const getWeatherByCity = async (city_) => {
  const baseUrl = BASE_URL_WEATHER;
  const params = `q=${city_}`;

  return await fetchData(baseUrl, params);
};
