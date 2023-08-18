import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import ChallengeCertiDetail from "../screens/Main/Challenge/Certification/ChallengeCertiDetail";
import index from "../screens/Main/Challenge/index";
import ChallengeCertification from "../screens/Main/Challenge/ChallengeCertification";
import ChallengeDetailCard from "../components/ChallengeDetailCard";
import Recycle from "../screens/Main/Recycle";
import Store from "../screens/Main/Store";
import Profile from "../screens/Main/Profile";
import Day from "../components/ChallengeDetail/Day";
import CertiBtn from "../components/ChallengeCerti/CertiBtn";
import ImagePicker from "../util/Camera/Camera";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Text } from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabIcon = ({ name, size, color }) => {
  return name === "user-circle-o" ? (
    <FontAwesome name="user-circle-o" size={size} color={color} />
  ) : (
    <MaterialCommunityIcons name={name} size={size} color={color} />
  );
};

const ChallengeStackNavi = () => {
  return (
    <Stack.Navigator
      presentation="card"
      screenOptions={{
        headerBackTitleVisible: false,
        headerMode: "screen",
      }}
    >
      <Stack.Screen
        name="MainScreen"
        component={TabNavigation}
        options={{
          title: null,
        }}
      />
      <Stack.Screen
        name="ChallengeDetail"
        component={ChallengeDetailTapNavi}
        options={{
          title: null,
        }}
      />
      <Stack.Group>
        <Stack.Screen
          name="ChallengeCerti"
          component={ChallengeCertiTapNavi}
          options={{
            title: null,
          }}
        />
        <Stack.Screen
          name="ImagePicker"
          component={ImagePicker}
          options={{
            title: null,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const ChallengeCertiTapNavi = () => {
  return (
    <Tab.Navigator
      initialRouteName="ChallengeCertiStatus"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingTop: 8,
          paddingBottom: 0,
          paddingLeft: 65,
          height: 80,
        },
      }}
    >
      <Tab.Screen
        name="ChallengeCertiStatus"
        component={ChallengeCertiDetail}
        options={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarButton: (props) => (
            <Text>
              <CertiBtn />
            </Text>
          ),
        })}
      />
    </Tab.Navigator>
  );
};

const ChallengeDetailTapNavi = () => {
  return (
    <Tab.Navigator
      initialRouteName="ChallengeDetailCard"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingBottom: 5,
        },
      }}
    >
      <Tab.Screen
        name="ChallengeDetailCard"
        component={ChallengeDetailCard}
        options={({ route }) => ({
          headerShown: false,
          tabBarButton: (props) => (
            <Text>
              <Day params={route.params} />
            </Text>
          ),
        })}
      />
      <Tab.Screen
        name="ChallengeCertification"
        component={ChallengeCertification}
        options={({ route }) => ({
          tabBarButton: (props) => <Text></Text>,
        })}
      />
    </Tab.Navigator>
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
