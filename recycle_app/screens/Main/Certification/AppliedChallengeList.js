import styled from "styled-components/native";
import { ScrollView, Dimensions } from "react-native";
import AppliedChallengeCard from "../../../components/ChallengeCerti/AppliedChallengeCard";

const { width, height } = Dimensions.get("screen");
const MainContainer = styled.View`
  flex: 1;
  background-color: white;
`;
const ChallengeContainer = styled.View`
  justify-content: center;
  align-items: center;
`;
const Container = styled.View`
  width: ${width * 0.9}px;
  height: ${height * 0.14}px;
  margin: 3px;
`;

export default ({ myChallenges }) => {
  console.log(myChallenges);
  return (
    <MainContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        <ChallengeContainer>
          {myChallenges.map((challenge) => (
            <Container key={"challengeContainer_" + challenge.id}>
              <AppliedChallengeCard challenge={challenge} />
            </Container>
          ))}
        </ChallengeContainer>
      </ScrollView>
    </MainContainer>
  );
};
