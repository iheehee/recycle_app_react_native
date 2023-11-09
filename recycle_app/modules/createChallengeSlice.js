import { createSlice } from "@reduxjs/toolkit";
import api from "../api";

const createChallengeSlice = createSlice({
  name: "createChallenge",
  initialState: {
    newChallenge: {
      title: null,
      summery: null,
      description: null,
      start_day: null,
      frequency: null,
      duration: null,
      certifications_start_time: null,
      certifications_end_time: null,
      certification_notice: null,
      max_member: 1,
      certification_photo_example: [],
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
      challengeObject.start_day = null;
      challengeObject.frequency = null;
      challengeObject.duration = null;
      challengeObject.certifications_start_time = null;
      challengeObject.certifications_end_time = null;
      challengeObject.certification_notice = null;
      challengeObject.max_member = 1;
      challengeObject.certification_photo_example = [];
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
    case "max_member":
      challengeObject.max_member = value;
      break;
    case "certification_notice":
      challengeObject.certification_notice = value;
      break;
    case "certification_photo_example":
      const existsPhoto = challengeObject.certification_photo_example.find(
        (photo) => photo.id === value.id
      );
      if (!existsPhoto) {
        challengeObject.certification_photo_example.push(value);
      }

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
