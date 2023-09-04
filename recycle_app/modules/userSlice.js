import { createSlice } from "@reduxjs/toolkit";
import api from "../api";

const userSlice = createSlice({
  name: "users",
  initialState: {
    isLoggedIn: false,
    token: null,
    profile: {
      myChallenges: [],
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
    myChallenges(state, action) {
      state.profile.myChallenges = action.payload.profile.my_challenges;
    },
  },
});
export const { logIn, logOut, myChallenges } = userSlice.actions;

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
export const getMyChallenges = (jwt) => async (dispatch) => {
  try {
    const { data } = await api.profile(jwt);
    console.log(data);
    dispatch(myChallenges({ profile: data }));
  } catch (e) {
    console.warn(e);
  }
};
export const getMyCertification = (jwt) => async (dispatch) => {
  const { data } = await api.profile(jwt);
  dispatch();
};

export default userSlice.reducer;
