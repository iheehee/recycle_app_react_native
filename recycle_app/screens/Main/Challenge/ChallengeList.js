import styled from "styled-components/native";
import { ScrollView, Dimensions } from "react-native";
import ChallengeCard from "../../../components/ChallengeCerti/ChallengeCard";

const { width, height } = Dimensions.get("screen");
const MainContainer = styled.View`
  flex: 1;
  background-color: #1b2631;
`;
const ChallengeContainer = styled.View`
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;
const Container = styled.View`
  width: ${width * 0.9}px;
  height: ${height * 0.14}px;
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
              <ChallengeCard challenge={challenge} />
            </Container>
          ))}
        </ChallengeContainer>
      </ScrollView>
    </MainContainer>
  );
};
