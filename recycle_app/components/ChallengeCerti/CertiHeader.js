import React from "react";
import styled from "styled-components/native";
import { Dimensions, Image } from "react-native";
import CertiDay from "./CertiDay";
import CertiExample from "./CertiExample";

const { width, height } = Dimensions.get("screen");

const BgContainer = styled.View`
  width: 100%;
  flex: 1;
  background-color: white;
  margin-bottom: -18px;
`;

const DivisionLine = styled.View`
  background-color: #e5e5e5;
  padding: 2px;
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

const CertiExampleContainer = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 35px;
`;

export default ({ route }) => {
  const {
    title,
    title_banner,
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
  } = route;
  //const localIp = "http://192.168.0.55:8080";
  const localIp = "http://192.168.35.73:8080/";
  return (
    <BgContainer>
      <BannerContainer>
        <Image
          source={{ uri: `${localIp}${title_banner}` }}
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
        <DurationContainer>
          <CertiDay
            start_day={start_day}
            duration={duration}
            frequency={frequency}
          />
        </DurationContainer>
        <CertiExampleContainer>
          <CertiExample />
        </CertiExampleContainer>
      </HeaderContainer>
      <DivisionLine></DivisionLine>
    </BgContainer>
  );
};
