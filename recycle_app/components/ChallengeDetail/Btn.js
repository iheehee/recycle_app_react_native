import React from "react";
import { TouchableOpacity, Alert } from "react-native";
import styled from "styled-components/native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import api from "../../api";

const Button = styled.View`
  border-radius: 10px;
  padding: 14px 0px;
  width: 195px;
  background-color: ${(props) => (!props.exist ? "green" : "#AFB42B")};
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text`
  color: white;
  justify-content: "center";
  fontsize: 14;
`;
const Btn = ({ id }) => {
  const jwt = useSelector((state) => state.usersReducer.token);
  const navigation = useNavigation();
  const myChallenge = useSelector(
    (state) => state.usersReducer.profile.myChallenge
  );
  const exist = myChallenge.find((appliedChallenge) => appliedChallenge === id);
  const ApplyChallenge = () =>
    api
      .challengeApply(id, null, jwt)
      .then((response) => {
        const result = response.data.result;
        return Alert.alert(result, "", [
          {
            text: "확인",
            onPress: () => console.log("확인"),
          },
        ]);
      })
      .catch((error) => {
        console.log(error);
      });
  const Certification = () => navigation.navigate("ChallengeCerti");

  return (
    <TouchableOpacity onPress={!exist ? ApplyChallenge : Certification}>
      <Button exist={exist}>
        <Text>{!exist ? "오늘부터 시작" : "인증하기"}</Text>
      </Button>
    </TouchableOpacity>
  );
};
export default Btn;
