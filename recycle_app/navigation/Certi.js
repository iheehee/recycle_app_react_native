import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Profile from "../screens/Main/Profile";
import styled from "styled-components/native";
import CertiHeader from "../components/ChallengeCerti/CertiHeader";
import ChallengeCertification from "../screens/Main/Challenge/ChallengeCertification";
import {
  Animated,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Text,
} from "react-native";

const TopTab = createMaterialTopTabNavigator();

const { width, height } = Dimensions.get("screen");

const Container = styled.View`
  flex: 1;
`;
const TabContainer = styled.View``;
const CertiContainer = styled.View``;

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

function MyTabBar({ state, descriptors, navigation, params }) {
  return (
    <Container>
      <CertiContainer>
        <CertiHeader route={params} />
      </CertiContainer>
      <TabContainer
        style={{ flexDirection: "row", justifyContent: "space-between" }}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true });
            }
          };
          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TabButton
              isFocused={isFocused}
              onPress={onPress}
              onLongPress={onLongPress}
              activeOpacity={1}
              key={`tab_${index}`}
            >
              <TabText isFocused={isFocused}>{label}</TabText>
            </TabButton>
          );
        })}
      </TabContainer>
    </Container>
  );
}

const ChallengeCertiStatusTab = ({ route }) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <TopTab.Navigator
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
        </TopTab.Navigator>
        {/* <CertiHeader route={route} /> */}
        {/* <ChallengeCertification /> */}
      </ScrollView>
    </View>
  );
};

export default ChallengeCertiStatusTab;
