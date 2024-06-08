// src/app/reducers.js
import { combineReducers } from "redux";
import userReducer from "./user/userSlice";
import classReducer from "./classroom/classSlice";
import childReducer from "./child/childSlice";


const rootReducer = combineReducers({
  user: userReducer,
  classroom: classReducer,
  child: childReducer
  // Add other reducers here
});

export default rootReducer;