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
const containerMarginBottomValue = 40;
const MainContainer = styled.View`
  flex: 1;
  background-color: white;
`;
const BgContainer = styled.View`
  margin: 20px 9px;
`;
const Container = styled.View`
  margin-bottom: ${containerMarginBottomValue}px;
`;
const CertificationTimeContainer = styled.View`
  margin-bottom: ${containerMarginBottomValue}px;
  margin-left: 5px;
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
const CertificationExamplePhotoScroll = styled.ScrollView`
  margin-bottom: ${containerMarginBottomValue}px;
`;
const MainTitle = styled.Text`
  margin-bottom: 30px;
  font-size: 30px;
`;
const Title = styled.Text`
  margin-bottom: 9px;
  font-size: 22px;
`;

export default ({ route }) => {
  const buttonFontSize = 15;
  return (
    <KeyboardAwareScrollView>
      <MainContainer>
        <BgContainer>
          <MainTitle>챌린지를 만들어주세요</MainTitle>
          <Title>챌린지 제목</Title>
          <TitleInput />
          <Container>
            <Title>인증 빈도</Title>
            <FrequencyButtonGroup fontSize={buttonFontSize} />
          </Container>
          <Container>
            <Title>챌린지 기간</Title>
            <DurationButtonGroup fontSize={buttonFontSize} />
          </Container>
          <Title>인증 가능 시간</Title>
          <CertificationTimeContainer>
            <TimeButton beginEnd="begin" />
            <Divider orientation="vertical" width={1} style={{ width: 1 }} />
            <TimeButton beginEnd="end" />
          </CertificationTimeContainer>
          <Title>시작일</Title>
          <Container>
            <StartDayButtonGroup fontSize={buttonFontSize} />
          </Container>
          <Title>챌린지 소개</Title>
          <DescriptionInput />
          <Title>인증 방법</Title>
          <CertificationNoticeInput />
          <Title>인증샷 예시</Title>
          <CertificationExamplePhotoScroll
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <CertificationExampleCard title={"인증 성공"} />
            <CertificationExampleCard title={"인증 실패"} />
          </CertificationExamplePhotoScroll>
          <Container>
            <Title>챌린지 최대인원</Title>
            <MaxMemberButton />
          </Container>
        </BgContainer>
      </MainContainer>
    </KeyboardAwareScrollView>
  );
};

const style = {
  mainTitleContainerStyle: { marginBottom: 30 },
  titleContainerStyle: { marginBottom: 7 },
};
