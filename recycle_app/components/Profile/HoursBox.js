import React from "react";
import { TouchableOpacity, Alert, Text, Dimensions } from "react-native";
import styled from "styled-components/native";
import { useFonts } from "expo-font";

const { width, height } = Dimensions.get("screen");

const Container = styled.View`
  border-radius: 20px;
  border-color: #747474;
  border-width: 1px;
  background-color: white;
  width: ${width / 1.1}px;
  height: 110px;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;
const TextContainer = styled.View`
  align-items: flex-start;
`;
const TitleText = styled.Text`
  color: grey;
  font-size: 18px;
  line-height: 21px;
`;
const ContentText = styled.Text`
  font-size: 30px;
  color: grey;
  font-family: ${(props) => (props.font ? props.font : null)};
`;

export default ({ hours }) => {
  let font = useFonts({
    JockeyOne: require("../../assets/font/JockeyOne-Regular.ttf"),
  });
  return (
    <Container>
      <TextContainer>
        <TitleText>나를 성장시킨 시간</TitleText>
        <ContentText font={"JockeyOne"}>20 Hours</ContentText>
      </TextContainer>
    </Container>
  );
};
