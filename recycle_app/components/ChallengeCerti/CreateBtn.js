import React from "react";
import { View, Alert } from "react-native";
import { useSelector } from "react-redux";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import api from "../../api";

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
  console.log(newChallenge);
  const data = {
    title: newChallenge.title,
    challenge_summery: newChallenge.summery,
  };

  const jwt = useSelector((state) => state.usersReducer.token);
  const navigation = useNavigation();
  const createChallenge = () =>
    Alert.alert("챌린지를 개설하시겠습니까?", "", [
      {
        text: "확인",
        onPress: () => api.createChallenge(data, jwt),
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
