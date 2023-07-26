import React from "react";
import styled from "styled-components/native";
import { Dimensions, Image, Text, ScrollView, View } from "react-native";
import CertiDay from "../../../components/ChallengeCerti/CertiDay";
import Certi from "../../../components/Certi";

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
  font-size: 22px;
  font-weight: 600;
  color: white;
`;

const BannerContainer = styled.View`
  align-items: center;
  background-color: black;
`;

const DurationContainer = styled.View`
  width: 100%;
  flex-direction: row;
`;
const PeriodText = styled.Text``;

const DFContainer = styled.View`
  flex-direction: row;
  margin: 0px 0px 6px 6px;
`;
const MemberContainer = styled.View`
  flex-direction: row;
  margin: 16px 0px 5px 6px;
  align-items: center;
`;
const MemberText = styled.Text`
  margin-left: 5px;
  font-size: 15px;
`;

const DescriptionContainer = styled.View`
  margin: 20px;
  padding-bottom: 300px;
`;
const Suggestion = styled.Text`
  font-size: 20px;
  font-weight: 500;
`;

const NoticeContainer = styled.View`
  margin: 20px;
`;

const NoticeTitle = styled.Text`
  font-size: 20px;
  font-weight: 500;
`;
const NoticeDescriptionBox = styled.View`
  background-color: #202833;
  border-radius: 8px;
  margin-top: 18px;
`;

const NoticeDescription = styled.Text`
  padding: 10px;
  margin: 4px;
  line-height: 20px;
  color: white;
`;

const ChallengeSummery = styled.Text`
  margin-top: 15px;
  line-height: 20px;
`;

const ChallengeDescription = styled.Text`
  margin-top: 25px;
  line-height: 20px;
`;

export default ({ route }) => {
  const {
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
  } = route.params;
  return (
    <ScrollView>
      <BgContainer>
        <BannerContainer>
          <Image
            source={{ uri: banner }}
            style={{
              width: width / 1,
              height: height / 3.6,
              position: "relative",
              opacity: 0.3,
            }}
          />

          <TitleContainer
            style={{
              position: "absolute",
              transform: [{ translateX: -12 }, { translateY: height / 6 }],
            }}
          >
            {title}
          </TitleContainer>
        </BannerContainer>
        <HeaderContainer>
          <DFContainer>
            <DurationContainer>
              <CertiDay
                start_day={start_day}
                duration={duration}
                frequency={frequency}
              />
            </DurationContainer>
          </DFContainer>
        </HeaderContainer>
        <DivisionLine></DivisionLine>
        <DescriptionContainer>
          <Suggestion>{"챌린지를 소개해주세요"}</Suggestion>
        </DescriptionContainer>
        <Certi />
        <DivisionLine></DivisionLine>
        <NoticeContainer>
          <NoticeTitle>{"이렇게 인증 해주세요"}</NoticeTitle>
          <NoticeDescriptionBox>
            <NoticeDescription>{notice}</NoticeDescription>
          </NoticeDescriptionBox>
        </NoticeContainer>
      </BgContainer>
    </ScrollView>
  );
};
