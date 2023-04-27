import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import api from "../../../api";
import axios from "axios";
import {Text} from "react-native";
import Detail from "./Detail";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const StyledText = styled.Text`
  font-size: 30px;
`;

export default ({ route }) => {
  const { challengeId } = route.params;
  const [challengeDetail, setChallengeDetail] = useState([]);
  const apiRequest = (id) =>
    api.challengeDetail(id).then((response) => setChallengeDetail([response.data]));
  useEffect(() => {
    apiRequest(challengeId);
  }, []);
  console.log(challengeDetail);
  return (
    <Container>
      {challengeDetail.map((challenge) => (
        <Detail title={challenge.title} />
      ))}
    </Container>
  );
};
