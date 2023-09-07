import styled from "styled-components/native";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
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

export default ({ myChallenges }) => {
  console.log(myChallenges);
  return (
    <ChallengeContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
        contentContainerStyle={{ paddingTop: 30 }}
      >
        <ChallengeBox></ChallengeBox>
      </ScrollView>
    </ChallengeContainer>
  );
};
