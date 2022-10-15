export const getDay = date => new Date(date * 1000).getDate();

export const getHour = date => (new Date(date * 1000).toLocaleTimeString("en-US"));

export const getMonth = date => {
  return new Date(date  * 1000).toLocaleString('default', { month: 'short' });
}

export const convertKelvinToFahrenheit = k => {
  return Math.trunc(((k-273.15)*1.8)+32)
}

export const getWeatherIcon = icon => {
  return `https://openweathermap.org/img/wn/${icon}@2x.png`
}

export const savePosition = (lat, lon) => {
  const gpsPosition = "gps_position";
  const position = getLocalStorageItem(gpsPosition);
  
  const coordinates = { lat, lon };

  if (position) {
    if (position.lat !== lat || position.lon !== lon) {
      setLocalStorageItem(gpsPosition, coordinates);
    }
  } else {
    setLocalStorageItem(gpsPosition, coordinates);
  }
}

export const setLocalStorageItem = (name, value) => {
  localStorage.setItem(name, JSON.stringify(value));
}

export const getLocalStorageItem = name => {
  const data = localStorage.getItem(name);
  if (data) {
    return JSON.parse(data);
  }

  return null;
}