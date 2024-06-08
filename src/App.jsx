import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient();
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <Outlet />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;