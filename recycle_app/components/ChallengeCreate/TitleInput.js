import { useState } from "react";
import { useDispatch } from "react-redux";
import { Input } from "@rneui/themed";
import { createChallenge } from "../../modules/createChallengeSlice";
import TextCounter from "./TextCounter";

export default ({}) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [focus, setFocus] = useState(false);
  const backgroundColorToggle =
    focus === true
      ? { backgroundColor: "white" }
      : { backgroundColor: "#eeeeee" };
  const inputStyle = {
    container: { marginLeft: -5, width: 425 },
    inputContainer: {
      borderWidth: 0.2,
      borderRadius: 12,
      paddingHorizontal: 15,
      height: 60,
      ...backgroundColorToggle,
    },
  };
  return (
    <>
      <Input
        value={text}
        maxLength={30}
        placeholder="예: 독서하기, 운동하기"
        containerStyle={inputStyle.container}
        inputContainerStyle={inputStyle.inputContainer}
        onChangeText={(text) => setText(text)}
        onFocus={() => setFocus(true)}
        onBlur={() => {
          setFocus(false);
          dispatch(createChallenge({ title: text }));
        }}
      />
      <TextCounter text={text} maxCount={30} />
    </>
  );
};
