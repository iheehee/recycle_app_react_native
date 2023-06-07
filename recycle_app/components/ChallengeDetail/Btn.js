import React from "react";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
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
  align-items: "center";
  justify-content: "center";
  fontsize: 14;
`;
const onPress = (id) => api.challengeApply(id);

const Btn = ({ id, text }) => (
  <TouchableOpacity onPress={onPress}>
    <Button>
      <Text>{text}</Text>
    </Button>
  </TouchableOpacity>
);

export default Btn;
