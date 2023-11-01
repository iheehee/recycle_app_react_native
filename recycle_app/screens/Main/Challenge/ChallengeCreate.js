import React from "react";
import { ScrollView, View, StyleSheet, Dimensions } from "react-native";
import styled from "styled-components/native";
import { Text, Divider } from "@rneui/themed";
import TimeButton from "../../../components/ChallengeCreate/TimeButton";
import CertificationExampleCard from "../../../components/ChallengeCreate/CertificationExampleCard";
import FrequencyButtonGroup from "../../../components/ChallengeCreate/FrequencyButtonGroup";
import DurationButtonGroup from "../../../components/ChallengeCreate/DurationButtonGroup";
import StartDayButtonGroup from "../../../components/ChallengeCreate/StartDayButtonGroup";
import MaxMemberButton from "../../../components/ChallengeCreate/MaxMemberButton";
import DescriptionInput from "../../../components/ChallengeCreate/DescriptionInput";
import CertificationNoticeInput from "../../../components/ChallengeCreate/CertificationNoticeInput";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import TitleInput from "../../../components/ChallengeCreate/TitleInput";

const { width, height } = Dimensions.get("screen");
const MainContainer = styled.View`
  flex: 1;
  background-color: white;
`;
const BgContainer = styled.View`
  margin: 20px 9px;
`;
const FrequencyContainer = styled.View`
  margin-bottom: 40px;
`;
const DurationContainer = styled.View`
  margin-bottom: 40px;
`;
const BeginDayContainer = styled.View`
  margin-bottom: 40px;
`;
const CertificationTimeContainer = styled.View`
  margin-left: 5px;
  margin-bottom: 40px;
  border-width: 0.5px;
  border-radius: 10px;
  border-color: #bbbbbb;
  height: 80px;
  width: 402px;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: #eeeeee;
`;

export default ({ route }) => {
  return (
    <KeyboardAwareScrollView>
      <MainContainer>
        <BgContainer>
          <Text h3 style={style.titleContainerStyle}>
            챌린지를 만들어주세요!
          </Text>
          <Text h4 style={style.titleContainerStyle}>
            챌린지 제목
          </Text>
          <TitleInput />
          <FrequencyContainer>
            <Text h4 style={style.titleContainerStyle}>
              인증 빈도
            </Text>
            <FrequencyButtonGroup />
          </FrequencyContainer>
          <DurationContainer>
            <Text h4 style={style.titleContainerStyle}>
              챌린지 기간
            </Text>
            <DurationButtonGroup />
          </DurationContainer>
          <Text h4 style={style.titleContainerStyle}>
            인증 가능 시간
          </Text>
          <CertificationTimeContainer>
            <TimeButton beginEnd="begin" />
            <Divider orientation="vertical" width={1} style={{ width: 1 }} />
            <TimeButton beginEnd="end" />
          </CertificationTimeContainer>
          <Text h4>시작일</Text>
          <BeginDayContainer>
            <StartDayButtonGroup />
          </BeginDayContainer>
          <Text h4>챌린지 소개</Text>
          <DescriptionInput />
          <Text h4>인증 방법</Text>
          <CertificationNoticeInput />
          <Text h4>인증샷 예시</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <CertificationExampleCard title={"인증 성공"} />
            <CertificationExampleCard title={"인증 실패"} />
          </ScrollView>
          <Text h4>챌린지 최대인원</Text>
          <MaxMemberButton />
        </BgContainer>
      </MainContainer>
    </KeyboardAwareScrollView>
  );
};

const style = { titleContainerStyle: { marginBottom: 7 } };
