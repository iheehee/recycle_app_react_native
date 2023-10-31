import React, { useState, useEffect } from "react";
import { ScrollView, View, StyleSheet, Dimensions } from "react-native";
import styled from "styled-components/native";
import { Text, Button, Divider, Input } from "@rneui/themed";
import TimeButton from "../../../components/ChallengeCreate/TimeButton";
import InputSpinner from "react-native-input-spinner";
import CertificationExampleCard from "../../../components/ChallengeCreate/CertificationExampleCard";
import FrequencyButtonGroup from "../../../components/ChallengeCreate/FrequencyButtonGroup";
import DurationButtonGroup from "../../../components/ChallengeCreate/DurationButtonGroup";

import StartDayButtonGroup from "../../../components/ChallengeCreate/StartDayButtonGroup";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const { width, height } = Dimensions.get("screen");
const MainContainer = styled.View`
  flex: 1;
  background-color: white;
`;
const BgContainer = styled.View`
  margin: 30px 15px;
`;
const FrequencyContainer = styled.View``;
const DurationContainer = styled.View``;
const BeginDayContainer = styled.View``;
const CertificationTimeContainer = styled.View`
  padding: 12px 0px;
  border-width: 0.5px;
  border-radius: 10px;
  border-color: #bbbbbb;
  height: 80px;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: #eeeeee;
`;

export default ({ route }) => {
  const [title, setTitle] = useState(null);
  const [startDay, setStartDay] = useState(null);
  const [frequency, setFrequency] = useState(null);
  const [durations, setDurations] = useState(null);
  const [num, setNum] = useState(1);

  return (
    <KeyboardAwareScrollView>
      <MainContainer>
        <BgContainer>
          <Text h3>챌린지를 만들어주세요!</Text>
          <Text h4>챌린지 제목</Text>
          <Input
            style={{ width: 395 }}
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
          <FrequencyContainer>
            <Text h4>인증 빈도</Text>
            <FrequencyButtonGroup />
          </FrequencyContainer>
          <DurationContainer>
            <Text h4>챌린지 기간</Text>
            <DurationButtonGroup />
          </DurationContainer>
          <Text h4>인증 가능 시간</Text>
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

          <Input
            multiline={true}
            numberOfLines={10}
            placeholder="INPUT WITH ERROR MESSAGE"
            maxLength={500}
            style={{
              height: 200,
              width: 395,
              textAlignVertical: "top",
            }}
          />

          <Text h4>인증 방법</Text>
          <Input
            multiline={true}
            numberOfLines={10}
            placeholder="INPUT WITH ERROR MESSAGE"
            maxLength={500}
            style={{ height: 200, textAlignVertical: "top", width: 395 }}
          />
          <Text h4>인증샷 예시</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <CertificationExampleCard title={"인증 성공"} />
            <CertificationExampleCard title={"인증 실패"} />
          </ScrollView>
          <Text h4>챌린지 최대인원</Text>
          <InputSpinner
            style={{
              width: 200,
              shadowOpacity: 0,
              borderWidth: 1,
              borderColor: "gray",
            }}
            skin="clean"
            max={20}
            min={1}
            onChange={(num) => {
              setNum(num);
            }}
          />
        </BgContainer>
      </MainContainer>
    </KeyboardAwareScrollView>
  );
};
