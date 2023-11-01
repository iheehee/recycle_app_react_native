import { useState } from "react";
import { useDispatch } from "react-redux";
import { Input } from "@rneui/themed";
import { createChallenge } from "../../modules/createChallengeSlice";

export default ({}) => {
  const dispatch = useDispatch();
  const [text, setText] = useState(null);

  return (
    <Input
      multiline={true}
      numberOfLines={10}
      placeholder="INPUT WITH ERROR MESSAGE"
      maxLength={500}
      inputStyle={inputStyle.input}
      inputContainerStyle={inputStyle.inputContainer}
      containerStyle={inputStyle.container}
      value={text}
      onChangeText={(text) => setText(text)}
      onBlur={() => dispatch(createChallenge({ description: text }))}
    />
  );
};

const inputStyle = {
  input: { height: 200 },
  inputContainer: { borderWidth: 0.2, borderRadius: 15, padding: 10 },
  container: { width: 420, marginLeft: -5 },
};
