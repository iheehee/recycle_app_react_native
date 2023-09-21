import React from "react";
import styled from "styled-components/native";
import { Dimensions, View, Image, Text, TouchableOpacity } from "react-native";

const { width, height } = Dimensions.get("screen");

const BgContainer = styled.View`
  background-color: white;
  width: ${width / 5}px;
  height: ${height / 8}px;
`;

const TitleContainer = styled.Text`
  margin: 10px 0px 0px 6px;
  font-size: 15px;

  font-weight: light;
`;

const DurationContainer = styled.View`
  margin: 10px 0px 0px 6px;
  padding: 3px;
  background-color: #d8d8d8;
  border-radius: 5px;
`;

const FrequencyContainer = styled.View`
  margin: 10px 0px 0px 6px;
  padding: 3px;
  background-color: #d8d8d8;
  border-radius: 5px;
`;

const ImageContainer = styled.View`
  margin: 0px 0px;
`;

const TimeContainer = styled.View`
  flex-direction: row;
`;

export default ({ banner }) => {
  const localIp = "http://192.168.0.55:8080";
  return (
    <BgContainer
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 1,
          height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        borderRadius: 15,
      }}
    >
      <Image
        source={{ uri: localIp + banner }}
        style={{ width: 75, height: 75, borderRadius: 20 }}
      />
      <ImageContainer></ImageContainer>
      {/*  <TitleContainer>{title}</TitleContainer>
        <TimeContainer>
          <DurationContainer>
            <Text style={{ fontSize: 13 }}>{duration}</Text>
          </DurationContainer>
          <FrequencyContainer>
            <Text style={{ fontSize: 13 }}>{frequency}</Text>
          </FrequencyContainer>
        </TimeContainer> */}
    </BgContainer>
  );
};
