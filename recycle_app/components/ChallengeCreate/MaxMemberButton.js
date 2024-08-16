import InputSpinner from "react-native-input-spinner";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Divider, Text } from "@rneui/themed";
import styled from "styled-components/native";
import { createChallenge } from "../../modules/createChallengeSlice";
import { Input } from "@rneui/themed";
import { TextInput, View } from "react-native";
import TimeButton from "./TimeButton";

const Container = styled.View``;

const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: grey;
`;

export default ({}) => {
  const dispatch = useDispatch();
  const [text, setText] = useState(1);
  const [focus, setFocus] = useState(false);
  const backgroundColorToggle =
    focus === true
      ? { backgroundColor: "white" }
      : { backgroundColor: "#eeeeee" };
  const inputStyle = {
    container: { width: 100 },
    inputStyle: { textAlign: "center" },
    inputContainer: {
      borderWidth: 0.2,
      borderRadius: 12,
      paddingHorizontal: 10,
      ...backgroundColorToggle,
    },
  };
  return (
    <Container>
      <InputContainer>
        {/* <Input
          value={text}
          maxLength={3}
          containerStyle={inputStyle.container}
          inputContainerStyle={inputStyle.inputContainer}
          inputStyle={inputStyle.inputStyle}
          onChangeText={(text) => setText(text)}
          onFocus={() => setFocus(true)}
          placeholder="5"
          onBlur={() => {
            setFocus(false);
            dispatch(createChallenge({ max_hour: text }));
          }}
        /> */}
      </InputContainer>
    </Container>
  );
};
