import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../screens/Auth/SignIn";
import SignUp from "../screens/Auth/SignUp";
import Welcome from "../screens/Welcome";

const Auth = createStackNavigator();

export default () => {
  return (
    
      <Auth.Navigator>
        <Auth.Screen name="Welcome" component={Welcome}/>
        <Auth.Screen name="SignIn" component={SignIn}/>
        <Auth.Screen name="SignUp" component={SignUp}/>
      </Auth.Navigator>
    
  );
};
