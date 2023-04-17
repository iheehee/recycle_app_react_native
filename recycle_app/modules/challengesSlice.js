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
    favs: [],
  },
  reducers: {
    setChallenges(state, action) {
      const { explore } = state;
      
      if (action.payload.page === 1) {
        state.explore.challenges = action.payload.challenges;
        state.explore.page = 1;
      } else {
        payload.challenges.forEach((payloadChallenges) => {
          const exists = explore.challenges.find(
            (savedChallenges) => savedChallenges.id === payloadChallenges.id
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
    console.log(page);
    dispatch(
      setChallenges({
        challenges: data,
        page: page
      })
    );
  } catch (e) {
    console.warn(e);
  }
};

export default challengesSlice.reducer;
