import React from "react";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Button = styled.View`
  border-radius: 20px;
  margin-bottom: 5px;
  padding: 13px 0px;
  width: 200px;
  background-color: green;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text`
  color: white;
  align-Items: "center";
  justify-Content: "center";
`;

const Btn = ({ onPress, text }) => (
  <TouchableOpacity onPress={onPress}>
    <Button>
      <Text>
        {text}
      </Text>
    </Button>
  </TouchableOpacity>
);

export default Btn;
