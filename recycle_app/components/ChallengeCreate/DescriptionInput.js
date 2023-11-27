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
    input: { height: 200 },
    inputContainer: {
      borderWidth: 0.2,
      borderRadius: 15,
      padding: 10,
      ...backgroundColorToggle,
    },
    container: { width: 420, marginLeft: -5 },
  };

  return (
    <>
      <Input
        multiline={true}
        numberOfLines={10}
        placeholder="예) 매일 1만보 걷고 건강해지기! 오늘부터 같이 해봐요 :)"
        maxLength={300}
        inputStyle={inputStyle.input}
        inputContainerStyle={inputStyle.inputContainer}
        containerStyle={inputStyle.container}
        value={text}
        onChangeText={(text) => setText(text)}
        onFocus={() => setFocus(true)}
        onBlur={() => {
          setFocus(false);
          dispatch(createChallenge({ description: text }));
        }}
      />
      <TextCounter text={text} maxCount={300} />
    </>
  );
};
