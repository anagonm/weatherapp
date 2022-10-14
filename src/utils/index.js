export const getDay = date => new Date(date * 1000).getDate();

export const getHour = date => (new Date(date * 1000).toLocaleTimeString("en-US"));

export const getMonth = date => {
  return new Date(date  * 1000).toLocaleString('default', { month: 'short' });
}

export const convertKelvinToFahrenheit = k => {
  return ((k-273.15)*1.8)+32
}

export const getWeatherIcon = icon => {
  return `https://openweathermap.org/img/wn/${icon}@2x.png`
}

export const savePosition = (lat, lon) => {
  const position = getPositionFromLocalStorage();
  
  const coordinates = { lat, lon };

  if (position) {
    if (position.lat !== lat || position.lon !== lon) {
      const newPositionData = {...position, ...coordinates}
      setObjectInLocalStorage(newPositionData);
    }
  } else {
    setObjectInLocalStorage(coordinates)
  }
}

export const setObjectInLocalStorage = (item) => {
  localStorage.setItem("gps_position", JSON.stringify(item));
}

export const getPositionFromLocalStorage = () => {
  const data = localStorage.getItem("gps_position");
  if (data !== undefined) {
    return JSON.parse(data);
  }
  return null;
}