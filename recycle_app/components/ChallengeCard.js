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
  margin: 0px 5px;
`;

const TimeContainer = styled.View`
  flex-direction: row;
`;

const ChallengeCard = ({
  id,
  title,
  banner,
  duration,
  frequency,
  member,
  count_member,
  max_member,
  applied_member,
  start_day,
  summery,
  description,
  notice,
  success_example,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ChallengeDetail", {
          screen: "ChallengeDetailCard",
          params: {
            id: id,
            title: title,
            banner: banner,
            duration: duration,
            frequency: frequency,
            member: member,
            count_member: count_member,
            max_member: max_member,
            applied_member: applied_member,
            start_day: start_day,
            summery: summery,
            description: description,
            notice: notice,
            success_example: success_example,
          },
        });
      }}
    >
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
      </Container>
    </TouchableOpacity>
  );
};

export default ChallengeCard;
