import React from 'react';
import { Provider } from 'mobx-react';
import AppRouter from './router';
import Stores from './stores/stores';
import './App.css';

const App = () => (
  <Provider {...Stores}>
    <AppRouter />
  </Provider>
);

export default App;
