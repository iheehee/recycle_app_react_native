import React, { useEffect } from "react";
import ChallengeList from "./ChallengeList";
import { useSelector } from "react-redux";

/* export default ({}) => {
  const myChallenges = useSelector(
    (state) => state.usersReducer.profile.myChallenges
  );
  console.log(myChallenges);
  return <AppliedChallengeList myChallenges={myChallenges} />;
};
 */
export default ({ getMyChallenges, myChallenges }) => {
  const jwt = useSelector((state) => state.usersReducer.token);
  useEffect(() => {
    getMyChallenges(jwt);
  }, []);

  return <ChallengeList myChallenges={myChallenges} />;
};
