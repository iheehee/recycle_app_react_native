import React, { useEffect } from "react";
import AppliedChallengeList from "./AppliedChallengeList";
import { useSelector } from "react-redux";

export default ({ navigation }) => {
  const myChallenges = useSelector(
    (state) => state.usersReducer.profile.myChallenges
  );
  return (
    <AppliedChallengeList myChallenges={myChallenges} navigaion={navigation} />
  );
};
