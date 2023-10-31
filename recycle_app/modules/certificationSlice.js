import { createSlice } from "@reduxjs/toolkit";
import api from "../api";

const certificationsSlice = createSlice({
  name: "certifications",
  initialState: {
    myCertifications: [],
  },
  reducers: {
    setMyCertifications(state, action) {
      state.myCertifications = action.payload.my_certifications;
    },
  },
});

export const { setMyCertifications } = certificationsSlice.actions;

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

export default certificationsSlice.reducer;
