import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Challenge from "../screens/Main/Challenge";
import Recycle from "../screens/Main/Recycle";
import Store from "../screens/Main/Store";
import Profile from "../screens/Main/Profile";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabIcon = ({ name, size, color }) => {
  return name === "user-circle-o" ? (
    <FontAwesome name="user-circle-o" size={size} color={color} />
  ) : (
    <MaterialCommunityIcons name={name} size={size} color={color} />
  );
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Store"
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
            marginBottom: -5
        },
      })}
      
    >
      <Tab.Screen name="Challenge" component={Challenge} />
      <Tab.Screen name="Recycle" component={Recycle} />
      <Tab.Screen name="Store" component={Store} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigation;