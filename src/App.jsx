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
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { RootProvider } from './Pages/Dashboard/RootContext';

const App = () => {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#239bd6' } }}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <RootProvider>
            <Toaster />
            <Outlet />
          </RootProvider>
        </QueryClientProvider>
      </Provider>
    </ConfigProvider>
  );
};

export default App;