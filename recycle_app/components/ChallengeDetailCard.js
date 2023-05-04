import React from "react";
import Pt from "prop-types";
import styled from "styled-components/native";
import { Dimensions, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");

const BgContainer = styled.View`
  width: 100%;
  flex: 1;
  background-color: white;
`;

const Container = styled.View``;

const TitleContainer = styled.Text`
  margin: 16px 0px 0px 6px;
  font-size: 22%;
  font-weight: 600;
`;

const BannerContainer = styled.View`
  align-items: center;
`;
const DurationContainer = styled.View`
  width: 14.5%;

  padding: 3px;
  background-color: #d8d8d8;
  border-radius: 5px;
`;
const FrequencyContainer = styled.View`
  width: 11%;
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
const TtText = styled.Text`
white-space: pre-line;
`;

const Detail = ({
  banner,
  title,
  duration,
  frequency,
  max_member,
  applied_member,
  start_day,
}) => {
  return (
    <BgContainer>
      <BannerContainer>
        <Image
          source={{ uri: banner }}
          style={{ width: width / 1, height: height / 3.6 }}
        />
      </BannerContainer>
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
      <TtText>{"플로깅(Plogging)은 조깅을 하면서 동시에 쓰레기를 줍는 운동입니다.쓰레기를 줍는 조깅을 줄여서 '줍깅'이라고도 합니다.\r\n\r\n\r\n이런 분들에게 추천해요\r\n✓ 환경 보호에 관심이 있는 분들\r\n✓ 조깅을 통한 건강관리를 하고 싶은 분들\r\n✓ 환경 보호 활동으로 기분 좋은 마음을 느끼고 싶은 분들"} </TtText>
    </BgContainer>
  );
};

export default Detail;
