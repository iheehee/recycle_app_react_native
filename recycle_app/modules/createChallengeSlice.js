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
      console.log(action);
      const challengeObject = state.newChallenge;
      Object.entries(action.payload).map(([key, value]) =>
        setNewChallengeValue(challengeObject, key, value)
      );
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
    case "successPhotoExample":
      challengeObject.certificationPhotoExample.push(value);
      break;
  }
};

export const { createChallenge } = createChallengeSlice.actions;

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
