import React from "react";
import { View, Alert } from "react-native";
import { useSelector } from "react-redux";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import api from "../../api";
import axios from "axios";

const Button = styled.TouchableOpacity`
  margin: 0px 0px 0px 0px;
  border-radius: 10px;
  padding: 10px 50px;
  width: 80%;

  background-color: black;
  align-items: center;
`;
const Text = styled.Text`
  color: white;
  font-size: 15px;
`;

const CreateBtn = () => {
  const newChallenge = useSelector(
    (state) => state.createChallengeReducer.newChallenge
  );
  const navigation = useNavigation();
  const createChallenge = () =>
    Alert.alert("챌린지를 개설하시겠습니까?", "", [
      {
        text: "확인",
        onPress: () =>
          axios.post("http://192.168.0.55:8080/challenges/", {
            title: "줍줍줍깅",
            summery: null,
            description: null,
            startDay: null,
            frequency: null,
            duration: null,
            certificationsStartTime: null,
            certificationsEndTime: null,
            certificationNotice: null,
            maxMember: 1,
          }),
      },
      {
        text: "취소",
      },
    ]);

  return (
    <View style={{ alignItems: "center" }}>
      <Button onPress={createChallenge}>
        <Text>{"챌린지 개설하기"}</Text>
      </Button>
    </View>
  );
};
export default CreateBtn;
