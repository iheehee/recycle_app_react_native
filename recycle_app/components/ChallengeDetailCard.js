import React from "react";
import Pt from "prop-types";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("screen");

const Container = styled.View`
  flex: 1;
  justify-content: start;
  margin-bottom: 5px;
`;

const TitleContainer = styled.Text`
  margin: 10px 0px 0px 6px;
  font-size: 15%;
  text-align: start;
  font-weight: lighter;
`;

const Detail = ({ title }) => {
  return (
    <Container>
      <TitleContainer>{title}</TitleContainer>
      {/* <Text>{max_member}</Text> */}
    </Container>
  );
};

export default Detail;
