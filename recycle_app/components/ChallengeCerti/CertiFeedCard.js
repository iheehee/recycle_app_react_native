import React from "react";
import { StyleSheet, View, Image, Alert, Dimensions } from "react-native";
import { Avatar, Text } from "@rneui/themed";
import styled from "styled-components/native";
import Ip from "../../util/Ip";
import ModalMenu from "./ModalMenu";
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

const CommentContainer = styled.View`
  margin-top: 10px;
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
                <YearMonthDay
                  DateTime={certification_data}
                  type={"YearMonthDay"}
                />{" "}
                <AmPm DateTime={certification_data} />{" "}
                <Time DateTime={certification_data} />
              </Text>
            </NameDateContainer>
          </HeaderInfoContainer>
          <ModalMenu />
        </HeadContainer>
        <Text>{route.params.certification_date}</Text>
        <Image
          source={{ uri: baseUrl + photo }}
          style={{ width: width - 20, height: 410 }}
        />
        <CommentContainer>
          <Text>{route.params.comment}</Text>
        </CommentContainer>
      </Container>
    </BgContainer>
  );
};
