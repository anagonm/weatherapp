import React from 'react';
import { store } from './store/store'
import { Provider } from 'react-redux'
import Dashboard from './components/Dashboard';
import { WeatherProvider } from './providers/weatherProvider';

const App = () => {
  return (
    <Provider store={store}>
      <WeatherProvider>
        <Dashboard />
      </WeatherProvider>
    </Provider>
  );
}

export default App;
