import React from "react";
import Pt from "prop-types";
import styled from "styled-components/native";
import { Dimensions, Image, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");

const BgContainer = styled.View`
  width: 100%;
  flex: 1;
  background-color: white;
`;

const DivisionLine = styled.View`
  background-color: #e5e5e5;
  padding: 3px;
`;

const HeaderContainer = styled.View`
  margin: 15px;
`;

const TitleContainer = styled.Text`
  margin: 16px 0px 0px 6px;
  font-size: 22%;
  font-weight: 600;
`;

const BannerContainer = styled.View`
  align-items: center;
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
const DFContainer = styled.View`
  flex-direction: row;
  margin: 15px 0px 6px 6px;
`;
const MemberContainer = styled.View`
  flex-direction: row;
  margin: 16px 0px 5px 6px;
  align-items: center;
`;
const MemberText = styled.Text`
  margin-left: 2px;
  font-size: 15px;
`;

const DescriptionContainer = styled.View`
  margin: 20px;
  
`;
const Suggestion = styled.Text`
  font-size: 20px;
  font-weight: 500;
`;

const White = styled.Text`
  color: white;
`

const ChallengeSummery = styled.Text`
  margin-top: 15px;
  line-height: 20%;
`;

const ChallengeDescription = styled.Text`
  margin-top: 25px;
  line-height: 20%;
`;

const Detail = ({
  banner,
  title,
  duration,
  frequency,
  max_member,
  applied_member,
  start_day,
  summery,
  description,
}) => {
  return (
    <ScrollView>
    <BgContainer>
      <BannerContainer>
        <Image
          source={{ uri: banner }}
          style={{ width: width / 1, height: height / 3.6 }}
        />
      </BannerContainer>
      <HeaderContainer>
      <TitleContainer>{title}</TitleContainer>
      <MemberContainer>
        <MaterialCommunityIcons name="human-child" size={18} color="black" />
        <MemberText>{`현재 ${applied_member}명`}</MemberText>
      </MemberContainer>
      <DFContainer>
        <DurationContainer>
          <Text>{duration}</Text>
        </DurationContainer>
        <FrequencyContainer>
          <Text>{frequency}</Text>
        </FrequencyContainer>
      </DFContainer>
      </HeaderContainer>
      <DivisionLine></DivisionLine>
      <DescriptionContainer>
        <Suggestion>{"챌린지를 소개해주세요"}</Suggestion>
        <ChallengeSummery>{summery}</ChallengeSummery>
        <ChallengeDescription>{description}</ChallengeDescription>
      </DescriptionContainer>
      
    </BgContainer>
    </ScrollView>
  );
};

export default Detail;