import { createSlice } from "@reduxjs/toolkit";
import api from "../api";

const certificationsSlice = createSlice({
  name: "certifications",
  initialState: {
    myCertifications: [],
  },
  reducers: {
    setMyCertifications(state, action) {
      const { myCertifications } = state;
      const { payload } = action;

      const challenge_id = payload.my_certifications.challenge_id;
      const existChallenge = myCertifications.findIndex(
        (element) => element.challenge_id === challenge_id
      );

      if (existChallenge === -1) {
        //새로운 챌린지를 생성한다.
        myCertifications.push(payload.my_certifications);
      } else if (
        myCertifications[existChallenge].certifications.length !==
        payload.my_certifications.certifications.length

        //서버에 새로운 인증 데이터가 추가되었다면 기존 state 데이터를 지우고 새로운 데이터를 캐싱한다
      ) {
        state.myCertifications = [];
        myCertifications.push(payload.my_certifications);
      } else if (
        myCertifications[existChallenge].certifications.length ===
        payload.my_certifications.certifications.length
        //get 요청 후 서버 데이터와 캐싱된 데이터가 같다면 아무 동작도 하지 않는다.
      ) {
        null;
      } else {
        if (existChallenge !== -1) {
          const targetChallenge = myCertifications[existChallenge];
          const certifications = targetChallenge.certifications;
          const existCertification = certifications.findIndex(
            (element) => element.certificationId === payload.certification_id
          );

          if (existCertification !== -1) {
            certifications.splice(
              existCertification,
              1,
              payload.my_certifications
            );
            //certifications.push(payload.my_certifications);
          } else {
            certifications.push(payload);
          }
        } else {
          myCertifications.push(payload.my_certifications);
        }
      }
    },
    addCertifications(state, action) {
      console.log(action.payload);
      const challenge_id = action.payload.challenge_id;
      const find_Challenge_index = state.myCertifications.findIndex(
        (element) => element.challenge_id === challenge_id
      );
      const targetChallenge = state.myCertifications[find_Challenge_index];
      targetChallenge.certifications.push(action.payload.data);
    },
    modify_Certifications(state, action) {
      console.log(action.payload);
      const challenge_id = action.payload.challenge_id;
      const certification_num = action.payload.certification_num;
      const modified_data = action.payload.data;
      const find_Challenge_index = state.myCertifications.findIndex(
        (element) => element.challenge_id === challenge_id
      );
      const targetChallenge = state.myCertifications[find_Challenge_index];
      targetChallenge.certifications.splice(
        certification_num - 1,
        1,
        modified_data
      );
    },
  },
});

export const { setMyCertifications, addCertifications, modify_Certifications } =
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
