import { combineReducers } from "redux";
import usersReducer from "./userSlice";

const rootReducer = combineReducers({
  usersReducer
});

export default rootReducer;