import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/user.rducer';



export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
