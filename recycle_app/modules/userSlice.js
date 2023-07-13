import { createSlice } from "@reduxjs/toolkit";
import api from "../api";

const userSlice = createSlice({
  name: "users",
  initialState: {
    isLoggedIn: false,
    token: null,
    profile: {
      myChallenge: [],
    },
  },
  reducers: {
    logIn(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
    },
    logOut(state, action) {
      state.isLoggedIn = false;
      state.token = null;
    },
    getProfile(state, action) {
      state.profile.myChallenge = action.payload.profile;
    },
  },
});
export const { logIn, logOut, profile } = userSlice.actions;

export const userLogin = (form) => async (dispatch) => {
  try {
    const {
      data: { id, token },
    } = await api.login(form);
    if (id && token) {
      dispatch(logIn({ token }));
    }
  } catch (e) {
    alert("Wrong user/password");
  }
};
export const userProfile = (form) => async (dispatch) => {
  try {
    const { data } = await api.profile();
    dispatch(profile({ profile: data }));
  } catch (e) {
    console.warn(e);
  }
};

export default userSlice.reducer;
