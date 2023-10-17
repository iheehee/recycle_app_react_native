import React from "react";
import styled from "styled-components/native";
import { Text } from "@rneui/themed";
import { Input } from "@rneui/themed";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const BgContainer = styled.View`
  width: 100%;
  flex: 1;
  background-color: white;
`;

const StyledText = styled.Text`
  font-size: 30px;
`;

export default () => {
  return (
    <BgContainer>
      <Text h3>챌린지를 만들어주세요!</Text>
      <Text h4>챌린지 제목</Text>
      <Input
        placeholder="INPUT WITH ERROR MESSAGE"
        inputContainerStyle={{ borderWidth: 1, paddingHorizontal: 10 }}
        errorStyle={{ color: "red" }}
        errorMessage="ENTER A VALID ERROR HERE"
      />
    </BgContainer>
  );
};
