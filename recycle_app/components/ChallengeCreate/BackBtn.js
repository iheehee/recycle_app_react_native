import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { resetCreateChallenge } from "../../modules/createChallengeSlice";

const Text = styled.Text`
  color: white;
  justify-content: "center";
  font-size: 15px;
`;

const BackBtn = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(resetCreateChallenge());
        navigation.goBack();
      }}
    >
      <Feather name="x" size={24} color="black" style={{ marginLeft: 9 }} />
    </TouchableOpacity>
  );
};
export default BackBtn;
