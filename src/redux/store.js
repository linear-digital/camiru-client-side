import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/user.rducer';
import childReducer from './child/child.reducer';
import classReducer from './classroom/class.reducer';



export const store = configureStore({
  reducer: {
    user: userReducer,
    child: childReducer,
    classroom: classReducer
  },
});
