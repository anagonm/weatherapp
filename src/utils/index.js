const ERROR_BROWSER_GEOLOCATION_OFF = "It seems like your browser does not support HTML5 geolocation. Please install a different browser and enable javascript";

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

export const resetApp = () => {
  window.location.href = window.location.href.split("?")[0]; // remove params from URL if any
  setLocalStorageItem("gps_position", null);
}

export const placeLinkIntoClipBoard = () => {
  const location = getLocalStorageItem("gps_position");
  const { lat, lon } = location;
  const link = `${window.location.href}?lat=${lat}&lon=${lon}`;
  return navigator.clipboard.writeText(link); // Promise
}

export const getURLParam = param => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
}

export const getBrowserGeoPosition = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      return reject(ERROR_BROWSER_GEOLOCATION_OFF);
    }

    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      return resolve({ latitude, longitude })
    });
  });
}