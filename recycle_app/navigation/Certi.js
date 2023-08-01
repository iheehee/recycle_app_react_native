import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Profile from "../screens/Main/Profile";
import styled from "styled-components/native";
import ChallengeCertification from "../screens/Main/Challenge/ChallengeCertification";
import { Animated, View, TouchableOpacity } from "react-native";

const TopTab = createMaterialTopTabNavigator();

const TabButton = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 40px;
  margin: 0px 16px;
  border-bottom-width: 2px;
  border-bottom-color: ${(props) =>
    props.isFocused ? "#5d004a" : "transparent"};
`;
const TabText = styled.Text`
  font-weight: 500;
  color: ${(props) => (props.isFocused ? "#5d004a" : "#000000")};
`;

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
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
            key={`tab_${index}`}
          >
            <TabText isFocused={isFocused}>{label}</TabText>
          </TabButton>
        );
      })}
    </View>
  );
}

const ChallengeCertiStatusTab = ({ route }) => {
  console.log(route);
  return (
    <TopTab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      initialRouteName="ChallengeCertification"
      screenOptions={{ swipeEnabled: false }}
    >
      <TopTab.Screen name="ChallengeCertification" component={Profile} />
      <TopTab.Screen name="Settings" component={Profile} />
    </TopTab.Navigator>
  );
};

export default ChallengeCertiStatusTab;
