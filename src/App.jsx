import React from 'react';
import { Outlet } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <Outlet />
    </Provider>
  );
};

export default App;