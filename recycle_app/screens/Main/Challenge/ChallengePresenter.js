import styled from 'styled-components/native';
import {
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  Text
} from "react-native";
import ChallengeCard from '../../../components/ChallengeCard';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`
const StyledText = styled.Text`
    font-size: 30px;
`
export default ({ challenges }) => {
    console.log(challenges)
    return (
      <Container>
        {challenges.length === 0 ? (
          <ActivityIndicator />
        ) : (
          <>
          <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: "100%" }}
          contentContainerStyle={{ paddingTop: 30 }}
        >
          {challenges.map(challenge => (
            <ChallengeCard
            key={challenge.id}
              banner={challenge.title_banner}
              title={challenge.title}
              owner={challenge.owner}
              start_day={challenge.start_day}
              id={challenge.id}
              frequency={challenge.frequency}
              max_member={challenge.max_member}
            />
          ))}
        </ScrollView>
        </>
        )
      }  
      </Container>
    );
  };