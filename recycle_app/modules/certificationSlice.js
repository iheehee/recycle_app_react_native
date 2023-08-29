import { createSlice } from "@reduxjs/toolkit";
import React, { useState } from "react";
import api from "../api";

const challengesSlice = createSlice({
  name: "challenges",
  initialState: {
    explore: {
      page: 1,
      challenges: [],
    },
  },
  reducers: {
    setChallenges(state, action) {
      const { explore } = state;
      const { payload } = action;
      if (payload.page === 1) {
        state.explore.challenges = payload.challenges;
        state.explore.page = 1;
      } else {
        payload.challenges.forEach((payloadChallenges) => {
          const exists = explore.challenges.find(
            (savedChallenges) => savedChallenges.id === payload.Challenges.id
          );
          if (!exists) {
            explore.challenges.push(payloadChallenges);
          }
        });
      }
    },
    increasePage(state) {
      state.explore.page += 1;
    },
  },
});

export const { setChallenges, increasePage } = challengesSlice.actions;

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

export default challengesSlice.reducer;
