import React from "react";
import styled from "styled-components/native";
import { useFonts } from "expo-font";
import {
  Dimensions,
  Image,
  Text,
  ScrollView,
  View,
  ImageBackground,
} from "react-native";
import HoursBox from "../../components/Profile/HoursBox";
import ProjectBox from "../../components/Profile/ProjectBox";
import { Avatar, Divider } from "@rneui/themed";

const BgContainer = styled.View`
  flex: 1;
  background-color: white;
  padding-horizontal: 20px;
`;
const InnerContainer = styled.View`
  margin-top: 100px;
  align-items: center;
`;
const DividerContainer = styled.View`
  margin-top: 30px;
`;
export default () => {
  let [fontsLoaded, fontError] = useFonts({
    Oswald: require("../../assets/font/Oswald-Regular.ttf"),
    Jockey: require("../../assets/font/JockeyOne-Regular.ttf"),
  });
  return (
    <BgContainer>
      {/* <ImageBackground
        source={require("../../sky.jpeg")}
        resizeMode="cover"
        style={{ flex: 1 }}
      > */}
      <InnerContainer>
        <Avatar
          size={82}
          rounded
          title="P"
          containerStyle={{ backgroundColor: "coral" }}
        />
        <Text>뚱이 다람쥐</Text>
        <Text>eee@gmail.com</Text>
        <HoursBox />
        <Text>프로젝트 현황</Text>
        <ProjectBox />
      </InnerContainer>

      <DividerContainer>
        <Divider width={1} color={"#BDBDBD"} />
      </DividerContainer>

      {/*  </ImageBackground> */}
    </BgContainer>
  );
};
