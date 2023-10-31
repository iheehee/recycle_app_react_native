import { combineReducers } from "redux";
import usersReducer from "./userSlice";
import challengesReducer from "./challengesSlice";
import certificationReducer from "./certificationSlice";
import createChallengeReducer from "./createChallengeSlice";

const rootReducer = combineReducers({
  usersReducer,
  challengesReducer,
  certificationReducer,
  createChallengeReducer,
});

export default rootReducer;
