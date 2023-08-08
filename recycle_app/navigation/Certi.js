import Profile from "../screens/Main/Profile";
import styled from "styled-components/native";
import CertiHeader from "../components/ChallengeCerti/CertiHeader";
import ChallengeCertification from "../screens/Main/Challenge/ChallengeCertification";
import CertiTopButton from "../components/ChallengeCerti/CertiTopButton";
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
const TabContainer = styled.View``;
const CertiContainer = styled.View`
  background-color: white;
  flex: 1;
  padding-bottom: 20px;
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
const TabText = styled.Text`
  font-weight: 500;
  color: ${(props) => (props.isFocused ? "black" : "gray")};
`;

const ChallengeCertiStatusTab = ({ route }) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        disableIntervalMomentum={true}
      >
        <CertiContainer>
          <CertiHeader route={route} />
        </CertiContainer>
        <CertiContainer>
          <CertiTopButton />
        </CertiContainer>

        {/* <TopTab.Navigator
          tabBar={(props) => <MyTabBar {...props} params={route} />}
          initialRouteName="ChallengeCertification"
          tabBarPosition="top"
          screenOptions={{
            swipeEnabled: false,
            animationEnabled: true,
          }}
          style={{ backgroundColor: "white" }}
        >
          <TopTab.Screen
            name="ChallengeCertification"
            component={ChallengeCertification}
          />
          <TopTab.Screen name="Settings" component={Profile} />
        </TopTab.Navigator> */}
        {/* <CertiHeader route={route} /> */}
        {/* <ChallengeCertification /> */}
      </ScrollView>
    </View>
  );
};

export default ChallengeCertiStatusTab;
