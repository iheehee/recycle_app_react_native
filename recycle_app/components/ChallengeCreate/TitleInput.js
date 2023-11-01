import { useState } from "react";
import { useDispatch } from "react-redux";
import { Input } from "@rneui/themed";
import { createChallenge } from "../../modules/createChallengeSlice";

export default ({}) => {
  const dispatch = useDispatch();
  const [text, setText] = useState(null);

  return (
    <Input
      value={text}
      containerStyle={inputStyle.container}
      inputContainerStyle={inputStyle.inputContainer}
      onChangeText={(text) => setText(text)}
      onBlur={() => dispatch(createChallenge({ title: text }))}
    />
  );
};

const inputStyle = {
  container: { marginLeft: -5, width: 425 },
  inputContainer: {
    borderWidth: 0.2,
    borderRadius: 12,
    paddingHorizontal: 10,
  },
};
