import { combineReducers } from "redux";
import usersReducer from "./userSlice";
import challengesReducer from "./challengesSlice";
import certificationReducer from "./certificationSlice";

const rootReducer = combineReducers({
  usersReducer,
  challengesReducer,
  certificationReducer,
});

export default rootReducer;
