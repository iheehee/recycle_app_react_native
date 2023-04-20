import React, { useEffect } from "react";
import ChallengePresenter from "./ChallengePresenter";


export default ({ getChallenges, challenges, page }) => {
  useEffect(() => {
    getChallenges(1);
  }, []);
  useEffect(() => {
    getChallenges(page);
  }, [page]);

  return <ChallengePresenter challenges={challenges} />;
};
