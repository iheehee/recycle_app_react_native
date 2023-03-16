import React from "react";
import {} from "react-native";
import Auth from "../navigation/Auth";
import styled from "styled-components/native";

const Text = styled.Text`
  margin-top: 200px;
`;

const View = styled.View`

  align-items: center;
`;

const Button = styled.Button`
    background-color: brown;
`;

export default () => {
  return (
    <View>
      <Text>hello</Text>
      <Button title = "title" />
    </View>
  );
};
