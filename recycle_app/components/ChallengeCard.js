import React from "react";
import Pt from "prop-types";
import styled from "styled-components/native";
import { Dimensions, View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("screen");

const Container = styled.View`
  flex: 1;
  justify-content: start;
  margin-bottom: 5px;
`;

const TitleContainer = styled.Text`
  margin: 10px 0px 0px 6px;
  font-size: 15%;
  text-align: start;
  font-weight: lighter;
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
  margin: 0px 5px;
`;
const TimeContainer = styled.View`
  flex-direction: row;
`;

const ChallengeCard = ({
  banner,
  title,
  owner,
  start_day,
  duration,
  frequency,
  max_member,
  id
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ChallengeDetail", {challengeId: id})}>
      <Container>
        <ImageContainer>
          <Image
            source={{ uri: banner }}
            style={{ width: width / 2.2, height: height / 8, borderRadius: 10 }}
          />
        </ImageContainer>
        <TitleContainer>{title}</TitleContainer>
        <TimeContainer>
          <DurationContainer>
            <Text style={{ fontSize: 13 }}>{duration}</Text>
          </DurationContainer>
          <FrequencyContainer>
            <Text style={{ fontSize: 13 }}>{frequency}</Text>
          </FrequencyContainer>
        </TimeContainer>
        {/* <Text>{max_member}</Text> */}
      </Container>
    </TouchableOpacity>
  );
};

export default ChallengeCard;
