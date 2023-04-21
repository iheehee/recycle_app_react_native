import styled from 'styled-components/native';
import {
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  Text
} from "react-native";
import ChallengeCard from '../../../components/ChallengeCard';

const ChallengeContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: white;
    `
const Container = styled.View`
    width: 48%;
    margin: 3px;
    `
const ChallengeBox = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%
`  

export default ({ route }) => {
  const { challenges } = route.params;
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
          {challenges.map(challenge => (
          <Container>
            <ChallengeCard
              key={challenge.id}
              banner={challenge.title_banner}
              title={challenge.title}
              owner={challenge.owner}
              start_day={challenge.start_day}
              duration={challenge.duration}
              frequency={challenge.frequency}
              max_member={challenge.max_member}
            />
          </Container>
            ))}
          </ChallengeBox>  
        </ScrollView>
        )
      }
      </ChallengeContainer>
    );
  };