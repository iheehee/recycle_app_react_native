import styled from "styled-components/native";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import AppliedChallengeCard from "../../../components/ChallengeCerti/AppliedChallengeCard";

const MainContainer = styled.View`
  flex: 1;
  background-color: white;
`;
const ChallengeContainer = styled.View`
  justify-content: center;
  align-items: center;
`;
const Container = styled.View`
  width: 90%;
  margin: 3px;
`;

export default ({ myChallenges }) => {
  return (
    <MainContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        <ChallengeContainer>
          {myChallenges.map((challenge) => (
            <Container key={"challengeContainer_" + challenge.id}>
              <AppliedChallengeCard key={challenge.id} challenge={challenge} />
            </Container>
          ))}
        </ChallengeContainer>
      </ScrollView>
    </MainContainer>
  );
};
