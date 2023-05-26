import React from "react";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { Text } from "react-native";
import Btn from "../ChallengeDetail/Btn";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const DurationContainer = styled.View`
  width: 16%;
  padding: 3px;
  background-color: #d8d8d8;
  border-radius: 5px;
`;
const FrequencyContainer = styled.View`
  width: 12%;
  padding: 3px;
  background-color: #d8d8d8;
  border-radius: 5px;
  margin-left: 7px;
`;

const Date = ({ start_day, duration, frequency }) => {
  return (
    <Container>
      <Text>{"1231111111111111111"}</Text>
      <DurationContainer>
        <Text>{duration}</Text>
      </DurationContainer>
      <FrequencyContainer>
        <Text>{frequency}</Text>
      </FrequencyContainer>
    </Container>
  );
};

export default () => {
  return <Btn />;
};
