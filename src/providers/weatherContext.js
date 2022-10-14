import React from 'react';

export const WeatherContext = React.createContext({});
export const ERROR_CONTEXT_OUTSIDE = "Weather context cannot be outside of WeatherProvider"

// Custom hook
export const useWeather = () => {
  const context = React.useContext(WeatherContext);

  if (context === undefined) {
    throw new Error(ERROR_CONTEXT_OUTSIDE);
  }

  return context;
}