import InputSpinner from "react-native-input-spinner";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Divider, Text } from "@rneui/themed";
import styled from "styled-components/native";
import { createChallenge } from "../../modules/createChallengeSlice";
import { TextInput } from "react-native";

const Container = styled.View`
  align-items: center;
`;
const InputContainer = styled.View`
  align-items: center;
  flex-direction: row;
`;

export default ({}) => {
  const dispatch = useDispatch();
  const [text, setText] = useState(null);

  return (
    <Container>
      <InputContainer>
        <TextInput
          value={text}
          onChangeText={(text) => setText(text)}
          onBlur={() => dispatch(createChallenge({ max_member: text }))}
          placeholder="2"
          keyboardType="numeric"
          style={{ fontSize: 24 }}
        />

        <Text style={style.rightFont}>명</Text>
      </InputContainer>

      <Divider style={style.divider} color="black" width={1} />
    </Container>
  );
};

const style = {
  divider: { marginTop: 5, width: "100%" },
  inputContainer: {
    alignItems: "center",
  },
  rightFont: {
    fontSize: 24,
  },
};
