import React from "react";
import Pt from "prop-types";
import styled from "styled-components/native";
import { Dimensions, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("screen");

const BgContainer = styled.View`
  width: 100%;
  flex: 1;
  background-color: white;
`;

const Container = styled.View``;

const TitleContainer = styled.Text`
  margin: 10px 0px 0px 6px;
  font-size: 20%;
  text-align: start;
  font-weight: lighter;
`;

const BannerContainer = styled.View`
  align-items: center;
`;
const DurationContainer = styled.View`
  width: 13.5%;
  margin: 10px 0px 6px 6px;
  padding: 3px;
  background-color: #d8d8d8;
  border-radius: 5px;
`;

const Detail = ({
  banner,
  title,
  duration,
  frequency,
  max_member,
  start_day,
}) => {
  return (
    <BgContainer>
      <BannerContainer>
        <Image source={{uri: banner }} style={{width: width/1, height: height/3.6}} />
      </BannerContainer>
      <TitleContainer>{title}</TitleContainer>
      <DurationContainer>
      <Text style={{ fontSize: 13 }}>{duration}</Text>
      </DurationContainer>
    </BgContainer>
  );
};

export default Detail;
