import { createSlice } from "@reduxjs/toolkit";
import React, { useState } from "react";
import api from "../api";

const certificationsSlice = createSlice({
  name: "certifications",
  initialState: {
    myCertifications: [],
  },
  reducers: {
    myCertifications(state, action) {
      state.myChallenges = action.payload.my_certifications;
    },
  },
});

export const { myCertifications } = certificationsSlice.actions;

export const getChallenges = (page) => async (dispatch) => {
  try {
    const { data } = await api.challenges();

    dispatch(
      setChallenges({
        challenges: data,
        page,
      })
    );
  } catch (e) {
    console.warn(e);
  }
};

export default certificationsSlice.reducer;
