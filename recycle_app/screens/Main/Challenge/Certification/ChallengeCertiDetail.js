import styled from "styled-components/native";
import CertiHeader from "../../../../components/ChallengeCerti/CertiHeader";
import ChallengeCertification from "../ChallengeCertification";
import CertiTopButton from "../../../../components/ChallengeCerti/CertiTopButton";
import {
  Animated,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Text,
} from "react-native";

const { width, height } = Dimensions.get("screen");

const Container = styled.View`
  flex: 1;
`;
const HeaderContainer = styled.View`
  background-color: white;
  flex: 1;
  padding-bottom: 20px;
`;
const TabContainer = styled.View`
  background-color: white;
  flex: 1;
`;

const TabButton = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 35px;
  margin: 0px 16px;
  border-bottom-width: 2px;
  border-bottom-color: ${(props) =>
    props.isFocused ? "black" : "transparent"};
`;

const ChallengeCertiDetail = ({ route }) => {
  console.log(route);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <HeaderContainer>
          <CertiHeader route={route} />
        </HeaderContainer>
        <TabContainer>
          <CertiTopButton />
        </TabContainer>
      </ScrollView>
    </View>
  );
};

export default ChallengeCertiDetail;
