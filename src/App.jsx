import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient();
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import store from './redux/store';
import { ConfigProvider } from 'antd';

const App = () => {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#239bd6' } }}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <Outlet />
        </QueryClientProvider>
      </Provider>
    </ConfigProvider>
  );
};

export default App;