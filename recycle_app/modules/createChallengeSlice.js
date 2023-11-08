import { createSlice } from "@reduxjs/toolkit";
import api from "../api";

const createChallengeSlice = createSlice({
  name: "createChallenge",
  initialState: {
    newChallenge: {
      title: null,
      summery: null,
      description: null,
      startDay: null,
      frequency: null,
      duration: null,
      certificationsStartTime: null,
      certificationsEndTime: null,
      certificationNotice: null,
      maxMember: 1,
      certificationPhotoExample: [],
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
      challengeObject.description = null;
      challengeObject.startDay = null;
      challengeObject.frequency = null;
      challengeObject.duration = null;
      challengeObject.certificationsStartTime = null;
      challengeObject.certificationsEndTime = null;
      challengeObject.certificationNotice = null;
      challengeObject.maxMember = 1;
      challengeObject.certificationPhotoExample = [];
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
    case "description":
      challengeObject.description = value;
      break;
    case "startDay":
      challengeObject.startDay = value;
      break;
    case "frequency":
      challengeObject.frequency = value;
      break;
    case "duration":
      challengeObject.duration = value;
      break;
    case "maxMember":
      challengeObject.maxMember = value;
      break;
    case "certificationNotice":
      challengeObject.certificationNotice = value;
      break;
    case "certificationPhotoExample":
      challengeObject.certificationPhotoExample.push(value);
      break;
  }
};

export const { createChallenge, resetCreateChallenge } =
  createChallengeSlice.actions;

export const getMyCertifications = (jwt) => async (dispatch) => {
  try {
    const { data } = await api.myCertifications(jwt);

    dispatch(
      setMyCertifications({
        my_certifications: data,
      })
    );
  } catch (e) {
    console.warn(e);
  }
};

export default createChallengeSlice.reducer;
