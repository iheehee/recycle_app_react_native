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
      state.myCertifications = action.payload.my_certifications;
    },
    setUsersCertifications(state, action) {
      state.usersCertifications = action.payload.usersCertifications;
    },
  },
});

export const { setMyCertifications, setUsersCertifications } =
  certificationsSlice.actions;

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
export const getUsersCertifications = (form) => async (dispatch) => {
  try {
    const { data } = await api.certifications(form);
    console.log(data);
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
