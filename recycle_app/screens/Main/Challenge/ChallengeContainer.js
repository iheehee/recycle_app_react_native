import React, { useEffect, useState } from "react";
import ChallengePresenter from "./ChallengePresenter";


export default ({ getChallenges, challenges, page }) => {
    useEffect(() => {
    getChallenges(1);
  }, []);

  /* const ss = useSelector((state) => state);
     console.log(ss); */
  return <ChallengePresenter challenges={challenges} />;
};
