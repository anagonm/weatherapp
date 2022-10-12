import './App.css';
import React from 'react';
import { store } from './store/store'
import { Provider } from 'react-redux'
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
}

export default App;
