import { createSlice } from "@reduxjs/toolkit";
import api from "../api";

const certificationsSlice = createSlice({
  name: "certifications",
  initialState: {
    myCertifications: [],
    usersCertifications: [],
  },
  reducers: {
    setMyCertifications(state, action) {
      const { myCertifications } = state;
      const { payload } = action;
      const challengeId = payload.challengeId;
      const existChallenge = myCertifications.findIndex(
        (element) => element.challengeId === challengeId
      );

      if (existChallenge !== -1) {
        targetChallenge = myCertifications[existChallenge];
        console.log(targetChallenge);
        certifications = targetChallenge.certifications;
        const existCertification = certifications.findIndex(
          (element) => element.certificationId === payload.certificationId
        );
        if (existCertification !== -1) {
          certifications.spice(existCertification);
          certifications.push(payload.my_certifications);
        } else {
          certifications.push(payload.my_certifications);
        }
      } else {
        myCertifications.push(payload.my_certifications);
      }
    },
    setCertifications(state, action) {},
    setUsersCertifications(state, action) {
      state.usersCertifications = action.payload.usersCertifications;
    },
  },
});

export const { setMyCertifications, setUsersCertifications } =
  certificationsSlice.actions;

export const getMyCertifications = (id, jwt) => async (dispatch) => {
  try {
    const { data } = await api.certifications(id, jwt);

    dispatch(
      setMyCertifications({
        my_certifications: data,
      })
    );
  } catch (e) {
    console.warn(e);
  }
};
export const getUsersCertifications = (form) => async (dispatch) => {
  try {
    const { data } = await api.certifications(form);
    dispatch(
      setUsersCertifications({
        usersCertifications: data,
      })
    );
  } catch (e) {
    console.warn(e);
  }
};

export default certificationsSlice.reducer;
