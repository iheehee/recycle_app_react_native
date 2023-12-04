import React from "react";
import { StyleSheet, View, Image, Alert, Dimensions } from "react-native";
import { Avatar, Text } from "@rneui/themed";
import styled from "styled-components/native";
import Ip from "../../util/Ip";
import BottomSheetMenu from "./BottomSheetMenu";
import AmPm from "../../util/Time/AmPm";
import YearMonthDay from "../../util/Time/YearMonthDay";
import Time from "../../util/Time/Time";

const BgContainer = styled.View`
  flex: 1;
  background-color: white;
`;
const Container = styled.View`
  margin: 0px 10px;
`;
const HeadContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const HeaderInfoContainer = styled.View`
  flex-direction: row;
`;
const NameDateContainer = styled.View`
  margin-left: 10px;
`;
const TextContainer = styled.Text`
  margin-left: 15px;
  font-size: 16px;
  font-weight: 500;
`;
const CameraIconContainer = styled.View`
  align-items: center;
  flex-direction: row;
`;

export default ({ route }) => {
  const baseUrl = Ip.localIp;
  const { width, height } = Dimensions.get("screen");
  const { nickname, comment, avatar, certification_data, photo } = route.params;

  return (
    <BgContainer>
      <Container>
        <HeadContainer>
          <HeaderInfoContainer>
            <Avatar size={46} rounded source={{ uri: baseUrl + avatar }} />
            <NameDateContainer>
              <Text h4>{route.params.nickname}</Text>
              <Text>
                <YearMonthDay DateTime={certification_data} />{" "}
                <AmPm DateTime={certification_data} />{" "}
                <Time DateTime={certification_data} />
              </Text>
            </NameDateContainer>
          </HeaderInfoContainer>
          <BottomSheetMenu />
        </HeadContainer>
        <Text>{route.params.certification_date}</Text>
        <Image
          source={{ uri: baseUrl + photo }}
          style={{ width: width - 20, height: 410 }}
        />
        <Text>{route.params.comment}</Text>
      </Container>
    </BgContainer>
  );
};
