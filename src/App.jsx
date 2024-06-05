import React from 'react';
import { Outlet } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <Provider store={store}>
      <Toaster />
      <Outlet />
    </Provider>
  );
};

export default App;