import React from "react";
import { TouchableOpacity, View, Text, Dimensions } from "react-native";
import styled from "styled-components/native";
import { useFonts } from "expo-font";
import { Divider } from "@rneui/themed";

const { width, height } = Dimensions.get("screen");

const Container = styled.View`
  border-radius: 20px;
  border-color: grey;
  border-width: 1px;
  background-color: white;
  width: ${width / 1.1}px;
  height: 80px;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;
const InnerContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: ${width / 1.8}px;
`;
const TextContainer = styled.View`
  width: 20%;
  align-items: center;
`;

const TitleText = styled.Text`
  color: white;
  font-size: 16px;
  line-height: 21px;
  font-weight: bold;
  margin-bottom: 2px;
`;
const ContentText = styled.Text`
  font-size: 20px;
  color: white;
`;

export default ({ proceedingProfject, complitedProject }) => {
  return (
    <Container>
      <InnerContainer>
        <TextContainer>
          <TitleText>진행중</TitleText>
          <ContentText>{proceedingProfject}2</ContentText>
        </TextContainer>
        <Divider orientation="vertical" width={2} />
        <TextContainer>
          <TitleText>완료</TitleText>
          <ContentText>{complitedProject}5</ContentText>
        </TextContainer>
      </InnerContainer>
    </Container>
  );
};
