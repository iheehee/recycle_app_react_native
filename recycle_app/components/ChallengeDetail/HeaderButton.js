import React from "react";
import { TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

export default ({ shape, onPress }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(onPress)}>
      <Feather name={shape} size={24} color="black" />
    </TouchableOpacity>
  );
};
