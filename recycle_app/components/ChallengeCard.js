import React from "react";
import Pt from "prop-types";
import styled from "styled-components/native";
import { Dimensions, View, Text } from "react-native";

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

const ChallengeCard = ({ banner, id, title, owner, start_day, frequency, max_member }) => (
    <Container>
      <Text>{title}</Text>
      <Text>{id}</Text>
      <Text>{owner}</Text>
      <Text>{start_day}</Text>
      <Text>{banner}</Text>
      <Text>{frequency}</Text>
      <Text>{max_member}</Text>
    </Container>
  );

export default ChallengeCard;