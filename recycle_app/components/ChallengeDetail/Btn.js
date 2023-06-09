import React from "react";
import { TouchableOpacity, Alert } from "react-native";
import styled from "styled-components/native";
import { useSelector } from "react-redux";
import api from "../../api";

const Button = styled.View`
  border-radius: 10px;
  padding: 14px 0px;
  width: 195px;
  background-color: green;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text`
  color: white;
  justify-content: "center";
  fontsize: 14;
`;

const Btn = ({ id, text }) => {
  const jwt = useSelector((state) => state.usersReducer.token);
  const onPress = () =>
    api
      .challengeApply(id, null, jwt)
      .then((response) => {
        const result = response.data.result;
        return Alert.alert(result, "", [
          {
            text: "확인",
            onPress: () => console.log("확인"),
          },
        ]);
      })
      .catch((error) => {
        console.log(error);
      });
  return (
    <TouchableOpacity onPress={onPress}>
      <Button>
        <Text>{text}</Text>
      </Button>
    </TouchableOpacity>
  );
};
export default Btn;
