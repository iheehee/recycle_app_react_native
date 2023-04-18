import React from "react";
import Pt from "prop-types";
import styled from "styled-components/native";
import { Dimensions, View, Text, Image } from "react-native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const { width, height } = Dimensions.get("screen");

const ImageContainer = styled.View`
  margin: 0px 5px;
`

const ChallengeCard = ({
  banner,
  id,
  title,
  owner,
  start_day,
  frequency,
  max_member,
}) => (
  <Container>
    <ImageContainer>
      <Image
        source={{ uri: banner}}
        style={{ width: width / 2.1, height: height / 4 }}
      />
    </ImageContainer>
    <Text>{title}</Text>
    <Text>{id}</Text>
    <Text>{owner}</Text>
    <Text>{start_day}</Text>
    <Text>{frequency}</Text>
    <Text>{max_member}</Text>
  </Container>
);

export default ChallengeCard;
