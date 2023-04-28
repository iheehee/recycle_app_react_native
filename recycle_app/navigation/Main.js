import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import index from "../screens/Main/Challenge/index";
import ChallengeDetail from "../screens/Main/Challenge/ChallengeDetail";
import Recycle from "../screens/Main/Recycle";
import Store from "../screens/Main/Store";
import Profile from "../screens/Main/Profile";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Image, Dimensions } from "react-native";
import styled from "styled-components/native";

const Tab = createBottomTabNavigator();
const ChallengeNavi = createStackNavigator();
const { width, height } = Dimensions.get("screen");
const ImageContainer = styled.View`
  flex: 1;
  justify-content: start;
  height: 100%
`;

const TabIcon = ({ name, size, color }) => {
  return name === "user-circle-o" ? (
    <FontAwesome name="user-circle-o" size={size} color={color} />
  ) : (
    <MaterialCommunityIcons name={name} size={size} color={color} />
  );
};

const ChallengeStackScreen = () => {
  return (
    <ChallengeNavi.Navigator
      mode="card"
      screenOptions={{
        headerBackTitleVisible: false,
        headerMode: "screen",
      }}
    >
      <ChallengeNavi.Screen name="Challenge" component={index} />
      <ChallengeNavi.Screen
        name="ChallengeDetail"
        component={ChallengeDetail}
        options={{
          title: null,
          headerBackground: () => (
            <ImageContainer>
              <Image
                style={{ width: width, height: height / 3 }}
                source={{
                  uri: "https://images.unsplash.com/photo-1682588382872-876b524625ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1185&q=80",
                }}
              />
            </ImageContainer>
          ),
        }}
      />
    </ChallengeNavi.Navigator>
  );
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Challenge"
      screenOptions={({ route }) => ({
        tabBarIcon: (props) => {
          let name = "";
          const size = 24;
          if (route.name === "Challenge") name = "medal-outline";
          else if (route.name === "Recycle") name = "recycle";
          else if (route.name === "Store") name = "store";
          else name = "user-circle-o";
          return TabIcon({ ...props, name, size });
        },
        tabBarItemStyle: {
          paddingTop: 10,
          marginBottom: -5,
        },
      })}
    >
      <Tab.Screen
        name="Challenge"
        component={ChallengeStackScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Recycle" component={Recycle} />
      <Tab.Screen name="Store" component={Store} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
