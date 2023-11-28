import React, { useEffect } from "react";
import AppliedChallengeList from "./AppliedChallengeList";
import { useSelector } from "react-redux";

export default ({}) => {
  const myChallenges = useSelector(
    (state) => state.usersReducer.profile.myChallenges
  );
  console.log(myChallenges);
  return <AppliedChallengeList myChallenges={myChallenges} />;
};
