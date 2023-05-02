import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import api from "../../../api";
import ChallengeDetailCard from "../../../components/ChallengeDetailCard";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default ({ route }) => {
  const { challengeId } = route.params;
  const [challengeDetail, setChallengeDetail] = useState([]);
  const apiRequest = (id) =>
    api
      .challengeDetail(id)
      .then((response) => setChallengeDetail([response.data]));
  useEffect(() => {
    apiRequest(challengeId);
  }, []);
  console.log(challengeDetail);
  return (
    <Container>
      {challengeDetail.map((challenge) => (
        <ChallengeDetailCard
          title={challenge.title}
          banner={challenge.title_banner}
          start_day={challenge.start_day}
          duration={challenge.duration}
          frequency={challenge.frequency}
          max_member={challenge.max_member}
        />
      ))}
    </Container>
  );
};
