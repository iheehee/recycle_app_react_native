import React, { useEffect, useState } from "react";
import ChallengePresenter from "./ChallengePresenter";


export default ({ getChallenges, challenges }) => {

    useEffect(() => {
    getChallenges();
  }, []);

  /* const ss = useSelector((state) => state);
     console.log(ss); */
  return <ChallengePresenter challenges={challenges} />;
};
