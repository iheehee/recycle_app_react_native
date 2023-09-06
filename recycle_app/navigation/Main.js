import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import ChallengeIndex from "../screens/Main/Challenge/ChallengeIndex";
import ChallengeCertification from "../screens/Main/Challenge/ChallengeCertification";
import ChallengeDetailCard from "../components/ChallengeDetailCard";
import CertificationContainer from "../screens/Main/Certification/CertificationContainer";
import Recycle from "../screens/Main/Recycle";
import Profile from "../screens/Main/Profile";
import Day from "../components/ChallengeDetail/Day";
import CertiBtn from "../components/ChallengeCerti/CertiBtn";
import Camera from "../util/Camera/Camera";
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
          name="Camera"
          component={Camera}
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
      initialRouteName="ChallengeCertiDetail"
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
        name="ChallengeCertiDetail"
        component={ChallengeCertiDetail}
        options={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarButton: (props) => (
            <Text>
              <CertiBtn id={route.params.id} />
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
          if (route.name === "챌린지") name = "medal-outline";
          else if (route.name === "인증") name = "camera-outline";
          else if (route.name === "재활용") name = "recycle";
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
        name="챌린지"
        component={ChallengeIndex}
        options={(route) => ({
          headerShown: false,
          tabBarStyle: { display: route.params },
        })}
      />
      <Tab.Screen name="인증" component={CertificationContainer} />
      <Tab.Screen name="재활용" component={Recycle} />
      <Tab.Screen name="프로필" component={Profile} />
    </Tab.Navigator>
  );
};

export default ChallengeStackNavi;
