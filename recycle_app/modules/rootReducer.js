import { combineReducers } from "redux";
import usersReducer from "./userSlice";
import challengesReducer from "./challengesSlice";

const rootReducer = combineReducers({
  usersReducer,
  challengesReducer
});

export default rootReducer;