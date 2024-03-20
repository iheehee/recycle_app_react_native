import { createSlice } from "@reduxjs/toolkit";
import api from "../api";

const createChallengeSlice = createSlice({
  name: "createChallenge",
  initialState: {
    newChallenge: {
      title: null,
      summery: null,
      max_hour: 1,
    },
  },
  reducers: {
    createChallenge(state, action) {
      const challengeObject = state.newChallenge;
      Object.entries(action.payload).map(([key, value]) =>
        setNewChallengeValue(challengeObject, key, value)
      );
    },
    resetCreateChallenge(state, action) {
      const challengeObject = state.newChallenge;
      challengeObject.title = null;
      challengeObject.summery = null;
      challengeObject.max_hour = 1;
    },
  },
});
const setNewChallengeValue = (challengeObject, key, value) => {
  switch (key) {
    case "title":
      challengeObject.title = value;
      break;
    case "summery":
      challengeObject.summery = value;
      break;
    case "max_hour":
      challengeObject.max_hour = value;
      break;
    case "title_banner":
      challengeObject.title_banner = value;
      break;
  }
};

export const { createChallenge, resetCreateChallenge } =
  createChallengeSlice.actions;

export default createChallengeSlice.reducer;
