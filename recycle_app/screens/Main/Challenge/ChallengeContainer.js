import React, { useEffect } from "react";
import ChallengePresenter from "./ChallengePresenter";


export default ({ getChallenges, challenges, page, navigation }) => {
  useEffect(() => {
    getChallenges(1);
  }, []);
  useEffect(() => {
    getChallenges(page);
  }, [page]);
  
  return (
  <ChallengePresenter challenges={challenges} navigaion={navigation} />);
};
