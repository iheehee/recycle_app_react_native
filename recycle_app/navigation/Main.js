import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigationState } from "@react-navigation/native";
import ChallengeIndex from "../screens/Main/Challenge/ChallengeIndex";
import ChallengeCertification from "../screens/Main/Challenge/ChallengeCertification";
import ChallengeDetailCard from "../components/ChallengeDetailCard";
import CertificationContainer from "../screens/Main/Certification/CertificationContainer";
import ChallengeCertiDetail from "../screens/Main/Certification/ChallengeCertiDetail";
import ChallengeCreate from "../screens/Main/Challenge/ChallengeCreate";
import Recycle from "../screens/Main/Recycle";
import Profile from "../screens/Main/Profile";
import Day from "../components/ChallengeDetail/Day";
import CertiBtn from "../components/ChallengeCerti/CertiBtn";
import Camera from "../util/Camera/Camera";
import HeaderButton from "../components/ChallengeDetail/HeaderButton";
import BackBtn from "../components/ChallengeCreate/BackBtn";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

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
        name="ChallengeIndex"
        component={ChallengeIndex}
        options={{
          title: null,
          headerRightContainerStyle: { paddingRight: 10 },
          headerRight: () => (
            <HeaderButton shape={"plus"} onPress={"ChallengeCreate"} />
          ),
        }}
      />
      <Stack.Screen
        name="ChallengeDetail"
        component={ChallengeDetailTapNavi}
        options={{
          title: null,
        }}
      />
      <Stack.Screen
        name="ChallengeCerti"
        component={ChallengeCertiTapNavi}
        options={{
          title: null,
        }}
      />
      <Stack.Screen
        name="ChallengeCreate"
        component={ChallengeCreate}
        options={{
          title: null,
          headerBackImage: () => <BackBtn />,
        }}
      />
    </Stack.Navigator>
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
              <CertiBtn challenge={route.params.challenge} />
            </Text>
          ),
        })}
      />
    </Tab.Navigator>
  );
};
const ChallengeCertiStackNavi = () => {
  return (
    <Stack.Navigator
      presentation="card"
      screenOptions={{
        headerBackTitleVisible: false,
        headerMode: "screen",
      }}
    >
      <Stack.Screen
        name="MyChallenge"
        component={CertificationContainer}
        options={{
          title: null,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CertificationDetail"
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
    </Stack.Navigator>
  );
};

const getVisibility = (selectedTabIndex, blockIndexArray) => {
  const routeIndex = useNavigationState((state) => state);

  let stackScreenIndex;
  !routeIndex
    ? null
    : (stackScreenIndex = routeIndex.routes[selectedTabIndex].state);
  //스택 내비게이션의 인덱스 선택
  if (!stackScreenIndex) {
    return null; //값이 비어있다면 null
  } else {
    if (blockIndexArray.includes(stackScreenIndex.index)) {
      return "none";
    }
  }
  return null;
};
const headerVisibility = (selectedTabIndex, blockIndexArray) => {
  const routeIndex = useNavigationState((state) => state);
  let stackScreenIndex;
  !routeIndex
    ? null
    : (stackScreenIndex = routeIndex.routes[selectedTabIndex].state);
  //스택 내비게이션의 인덱스 선택

  if (!stackScreenIndex) {
    return true;
  } else {
    if (blockIndexArray.includes(stackScreenIndex.index)) {
      return false;
    }
  }
  return true;
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="챌린지"
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
        component={ChallengeStackNavi}
        options={(route) => ({
          headerShown: false,
          tabBarStyle: { display: getVisibility(0, [1]) },
        })}
      />
      <Tab.Screen
        name="인증"
        component={ChallengeCertiStackNavi}
        options={(route) => ({
          headerShown: headerVisibility(1, [1, 2]),
          tabBarStyle: { display: getVisibility(1, [1, 2]) },
        })}
      />
      <Tab.Screen name="재활용" component={Recycle} />
      <Tab.Screen name="프로필" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
