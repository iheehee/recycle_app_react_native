import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createChallenge } from "../../modules/createChallengeSlice";
import InputSpinner from "react-native-input-spinner";

export default ({}) => {
  const dispatch = useDispatch();
  const [num, setNum] = useState(1);
  useEffect(() => {
    dispatch(createChallenge({ maxMember: num }));
  }, [num]);
  return (
    <InputSpinner
      style={{
        width: 200,
        shadowOpacity: 0,
        borderWidth: 1,
        borderColor: "gray",
      }}
      skin="clean"
      max={20}
      min={1}
      onChange={(num) => {
        setNum(num);
      }}
    />
  );
};
