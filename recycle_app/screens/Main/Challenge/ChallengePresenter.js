import styled from "styled-components/native";
import { ActivityIndicator, ScrollView } from "react-native";
import ChallengeCard from "../../../components/ChallengeCard";

const ChallengeContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;
const Container = styled.View`
  width: 48%;
  margin: 3px;
`;
const ChallengeBox = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export default ({ challenges }) => {
  console.log(challenges);
  return (
    <ChallengeContainer>
      {challenges.length === 0 ? (
        <ActivityIndicator />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: "100%" }}
          contentContainerStyle={{ paddingTop: 30 }}
        >
          <ChallengeBox>
            {challenges.map((challenge) => (
              <Container key={challenge.id}>
                <ChallengeCard
                  id={challenge.id}
                  banner={challenge.title_banner}
                  title={challenge.title}
                  description={challenge.challenge_description}
                  summery={challenge.challenge_summery}
                  notice={challenge.certification_notice}
                  owner={challenge.owner}
                  start_day={challenge.start_day}
                  duration={challenge.duration}
                  frequency={challenge.frequency}
                  count_member={challenge.number_of_applied_member}
                  max_member={challenge.max_member}
                  success_example={challenge.certification_photo_example}
                />
              </Container>
            ))}
          </ChallengeBox>
        </ScrollView>
      )}
    </ChallengeContainer>
  );
};
