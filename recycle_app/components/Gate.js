import React from "react";
import {} from "react-native";
import { useSelector } from "react-redux";
import Auth from "../navigation/Auth";
import Main from "../navigation/Main";
import { NavigationContainer } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native";

export default () => {
  const { isLoggedIn } = useSelector((state) => state.usersReducer);
  return (
    <NavigationContainer>
      {isLoggedIn ? <Main /> : <Auth />}
    </NavigationContainer>
  );
};
