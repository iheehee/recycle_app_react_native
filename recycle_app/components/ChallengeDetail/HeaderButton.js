import React from "react";
import { TouchableOpacity, Alert } from "react-native";
import styled from "styled-components/native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { getMyChallenges } from "../../modules/userSlice";
import api from "../../api";
import { Feather } from "@expo/vector-icons";

export default ({ shape, onPress }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(onPress)}>
      <Feather name={shape} size={24} color="black" />
    </TouchableOpacity>
  );
};
