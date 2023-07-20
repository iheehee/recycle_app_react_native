import React, { useEffect } from "react";
import ChallengePresenter from "./ChallengePresenter";
import { useSelector } from "react-redux";

export default ({
  getChallenges,
  challenges,
  getProfile,
  page,
  navigation,
}) => {
  const jwt = useSelector((state) => state.usersReducer.token);
  useEffect(() => {
    getChallenges(1);
    getProfile(jwt);
  }, [jwt]);
  useEffect(() => {
    getChallenges(page);
  }, [page]);

  return <ChallengePresenter challenges={challenges} navigaion={navigation} />;
};
