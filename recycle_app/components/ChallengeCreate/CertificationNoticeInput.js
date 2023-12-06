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
        placeholder="예) 오늘 날짜와 걸음 수가 적힌 만보기 캡쳐 화면 업로드"
        maxLength={300}
        containerStyle={inputStyle.container}
        inputStyle={inputStyle.input}
        inputContainerStyle={inputStyle.inputContainer}
        value={text}
        onChangeText={(text) => setText(text)}
        onFocus={() => setFocus(true)}
        onBlur={() => {
          setFocus(false);
          dispatch(createChallenge({ certification_notice: text }));
        }}
      />
      <TextCounter text={text} maxCount={300} />
    </>
  );
};
