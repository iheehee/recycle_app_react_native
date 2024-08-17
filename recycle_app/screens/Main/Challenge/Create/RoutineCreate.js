import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { Divider } from "@rneui/themed";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import MaxMemberButton from "../../../../components/ChallengeCreate/MaxMemberButton";
import TitleInput from "../../../../components/ChallengeCreate/TitleInput";
import SummeryInput from "../../../../components/ChallengeCreate/SummeryInput";
import CreateBtn from "../../../../components/ChallengeCreate/CreateBtn";
import TimePicker from "../../../../components/ChallengeCreate/TimePicker";

const { width, height } = Dimensions.get("screen");
const containerMarginBottomValue = 20;
const MainContainer = styled.View`
  flex: 1;
  height: ${height}px;
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

const Title = styled.Text`
  margin-bottom: 10px;
  font-size: 22px;
`;
const SubTitle = styled.Text`
  margin-top: -7px;
  font-size: 14px;
  color: gray;
`;

export default ({ newChallenge }) => {
  console.log(newChallenge);
  const buttonFontSize = 15;
  return (
    <KeyboardAwareScrollView>
      <MainContainer>
        <BgContainer>
          <Container>
            <Title>만들고 싶은 습관이 있나요?</Title>
            <TitleInput />
          </Container>
          {/* <Container>
            <Title></Title>
            <SummeryInput />
          </Container> */}

          <Container>
            {/* <Title>지속시간</Title> */}
            <TimePicker />
          </Container>
          <CreateBtn />
        </BgContainer>
      </MainContainer>
    </KeyboardAwareScrollView>
  );
};
