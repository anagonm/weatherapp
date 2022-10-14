export const API_KEY          = "bf1548ea41975ce03a084e2e8c1501bf";
export const BASE_URL_WEATHER = "https://api.openweathermap.org/data/2.5";
export const ERROR_INVALID_LAT_LON = "Invalid latitude or longitude, make sure your browser support Javascript and HTML";
export const ERROR_INVALID_CITY = "Invalid city. Try with another city";

export const fetchData = async (url, params) => {
  const fullUrl = `${url}?${params}&appid=${API_KEY}`
  const rawResponse = await fetch(fullUrl);
  const response = await rawResponse.json();

  if (rawResponse.status === 200) {
    return response
  }

  throw response;
}