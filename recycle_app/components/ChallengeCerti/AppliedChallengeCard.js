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
  padding: 5px;
`;

const HeaderContainer = styled.View`
  margin: 15px;
`;

const Title = styled.Text`
  margin: 16px 0px 0px 6px;
  font-size: 17px;
  font-weight: 400;
  color: black;
`;

const BannerContainer = styled.View`
  align-items: center;
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

export default ({ challenge }) => {
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
  } = challenge;

  return (
    <BgContainer>
      <Image
        source={{ uri: `http://192.168.0.55:8080/${title_banner}` }}
        style={{
          width: 50,
          height: 50,
          borderRadius: 30,
        }}
      />

      <BannerContainer>
        <Title>{title}</Title>
      </BannerContainer>
      <HeaderContainer>
        <DurationContainer>
          {/* <CertiDay
            start_day={start_day}
            duration={duration}
            frequency={frequency}
          /> */}
        </DurationContainer>
      </HeaderContainer>
    </BgContainer>
  );
};
