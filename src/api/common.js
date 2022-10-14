export const API_KEY          = "bf1548ea41975ce03a084e2e8c1501bf";
export const BASE_URL_WEATHER = "https://api.openweathermap.org/data/2.5";

export const fetchData = async (url, params) => {
  const fullUrl = `${url}?${params}&appid=${API_KEY}`
  const rawResponse = await fetch(fullUrl);
  const response = await rawResponse.json();
  return response;
}