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
      max_member: null,
      success_photo_example: null,
      fail_photo_example: null,
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
      challengeObject.max_member = null;
      challengeObject.success_photo_example = null;
      challengeObject.fail_photo_example = null;
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
    case "start_day":
      challengeObject.start_day = value;
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
    case "certifications_start_time":
      challengeObject.certifications_start_time = value;
      break;
    case "certifications_end_time":
      challengeObject.certifications_end_time = value;
      break;
    case "certification_notice":
      challengeObject.certification_notice = value;
      break;
    case "success_photo_example":
      challengeObject.success_photo_example = value;

      break;
    case "fail_photo_example":
      challengeObject.fail_photo_example = value;
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
