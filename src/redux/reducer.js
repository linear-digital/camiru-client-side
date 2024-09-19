// src/app/reducers.js
import { combineReducers } from "redux";
import userReducer from "./user/userSlice";
import classReducer from "./classroom/classSlice";
import childReducer from "./child/childSlice";
import socketReducer from "./socket/socketSlice";
import settingReducer from "./setting/settingSlice";


const rootReducer = combineReducers({
  user: userReducer,
  classroom: classReducer,
  child: childReducer,
  socket: socketReducer,
  settings: settingReducer
  // Add other reducers here
});

export default rootReducer;