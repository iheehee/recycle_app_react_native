import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import index from "../screens/Main/Challenge/index";
import ChallengeDetailCard from "../screens/Main/Challenge/ChallengeDetail";
import Recycle from "../screens/Main/Recycle";
import Store from "../screens/Main/Store";
import Profile from "../screens/Main/Profile";
import Day from "../components/ChallengeDetail/Day";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Image, Dimensions, Text } from "react-native";

const Tab = createBottomTabNavigator();
const ChallengeNavi = createStackNavigator();
const ChallengeDetailTap = createBottomTabNavigator();
const { width, height } = Dimensions.get("screen");

const TabIcon = ({ name, size, color }) => {
  return name === "user-circle-o" ? (
    <FontAwesome name="user-circle-o" size={size} color={color} />
  ) : (
    <MaterialCommunityIcons name={name} size={size} color={color} />
  );
};

const ChallengeStackNavi = () => {
  return (
    <ChallengeNavi.Navigator
      presentation="card"
      screenOptions={{
        headerBackTitleVisible: false,
        headerMode: "screen",
      }}
    >
      <ChallengeNavi.Screen
        name="ChallengeCard"
        component={TabNavigation}
        options={{
          title: null,
        }}
      />
      <ChallengeNavi.Screen
        name="ChallengeDetailCard"
        component={ChallengeDetailTapNavi}
        options={{
          title: null,
        }}
      />
    </ChallengeNavi.Navigator>
  );
};

const ChallengeDetailTapNavi = () => {
  return (
    <ChallengeDetailTap.Navigator
      initialRouteName="ChallengeDetailCard"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingBottom: 5,
        },
      }}
    >
      <ChallengeDetailTap.Screen
        name="ChallengeDetailCard"
        component={ChallengeDetailCard}
        options={({ route }) => ({
          headerShown: false,
          tabBarButton: (props) => (
            <Text>
              <Day
                id={route.params.challengeId}
                start_day={route.params.start_day}
                duration={route.params.duration}
                frequency={route.params.frequency}
              />
            </Text>
          ),
        })}
      />
    </ChallengeDetailTap.Navigator>
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
          headerShown: false,
        },
      })}
    >
      <Tab.Screen
        name="Challenge"
        component={index}
        options={(route) => ({
          headerShown: false,
          tabBarStyle: { display: route.params },
        })}
      />
      <Tab.Screen name="Recycle" component={Recycle} />
      <Tab.Screen name="Store" component={Store} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default ChallengeStackNavi;
