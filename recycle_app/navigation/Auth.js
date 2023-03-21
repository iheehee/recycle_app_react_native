import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../screens/Auth/SignIn";
import SignUp from "../screens/Auth/SignUp";
import Welcome from "../screens/Welcome";
import BackBtn from "../components/Auth/BackBtn";

const Auth = createStackNavigator();

export default () => {
  return (
    <Auth.Navigator
      screenOptions={{
        presentation: "modal",
        headerBackImage: () => <BackBtn />,
        headerBackTitleVisible: false,
      }}
    >
      <Auth.Screen name="Welcome" component={Welcome} />
      <Auth.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerTitle: "Sign In" }}
      />
      <Auth.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerTitle: "Sign Up" }}
      />
    </Auth.Navigator>
  );
};
