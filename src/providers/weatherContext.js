import { createContext, useContext } from 'react';

export const WeatherContext = createContext({});
export const ERROR_CONTEXT_OUTSIDE = "Weather context cannot be outside of WeatherProvider";

// Custom hook
export const useWeather = () => {
  const contextValue = useContext(WeatherContext);

  if (contextValue === undefined) {
    throw new Error(ERROR_CONTEXT_OUTSIDE);
  }

  return contextValue;
}
