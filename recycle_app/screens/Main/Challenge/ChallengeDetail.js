import React, { useState, useEffect, useLayoutEffect } from "react";
import styled from "styled-components/native";
import api from "../../../api";
import ChallengeDetailCard from "../../../components/ChallengeDetailCard";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import Date from "../../../components/ChallengeDetail/Date";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default ({ route }) => {
  const { challengeId } = route.params;
  const [challengeDetail, setChallengeDetail] = useState([]);
  const navigation = useNavigation();
  const apiRequest = (id) =>
    api
      .challengeDetail(id)
      .then((response) => setChallengeDetail([response.data]));

  useEffect(() => {
    apiRequest(challengeId);
    navigation.setOptions({
      tabBarButton: () => (
        <Text>
          {challengeDetail.map((challenge) => (
            <Date
              start_day={challenge.start_day}
              duration={challenge.duration}
              frequency={challenge.frequency}
            />
          ))}
        </Text>
      ),
    });
  }, [challengeDetail]);
  return (
    <Container>
      {challengeDetail.map((challenge) => (
        <ChallengeDetailCard
          key={challenge.id}
          title={challenge.title}
          banner={challenge.title_banner}
          start_day={challenge.start_day}
          duration={challenge.duration}
          frequency={challenge.frequency}
          applied_member={challenge.number_of_applied_member}
          max_member={challenge.max_member}
          summery={challenge.challenge_summery}
          description={challenge.challenge_description}
          notice={challenge.certification_notice}
        />
      ))}
    </Container>
  );
};
