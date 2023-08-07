import React from "react";
import { TouchableOpacity, Alert } from "react-native";
import styled from "styled-components/native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { getProfile } from "../../modules/userSlice";
import api from "../../api";

const Button = styled.View`
  margin: 10px 0px 0px 50px;
  border-radius: 10px;
  padding: 16px 0px;
  width: 77%;
  background-color: black;
  align-items: center;
`;
const Text = styled.Text`
  color: white;
  justify-content: "center";
  font-size: 15px;
`;
const CertiBtn = ({ params }) => {
  const jwt = useSelector((state) => state.usersReducer.token);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const ApplyChallenge = () =>
    api
      .challengeApply(params.id, null, jwt)
      .then((response) => {
        const result = response.data.result;
        return Alert.alert(result, "", [
          {
            text: "확인",
            onPress: () => {
              dispatch(getProfile(jwt));
              return navigation.navigate("ChallengeCerti");
            },
          },
        ]);
      })
      .catch((error) => {
        console.log(error);
        if (error.message === "Network Error") {
          return Alert.alert(
            "네트워크 연결이 유실되었습니다. 다시 시도 하시겠습니까?",
            "",
            [
              {
                text: "다시 시도",
                onPress: () => {
                  ApplyChallenge();
                },
              },
              {
                text: "취소",
                style: "destructive",
              },
            ]
          );
        } else {
          return Alert.alert(
            "연결이 실패했습니다.",
            "다시 시도 하시겠습니까?",
            [
              {
                text: "다시 시도",
                onPress: () => {
                  console.log("redirection");
                },
              },
              {
                text: "취소",
                onPress: () => console.log("redirection"),
                style: "destructive",
              },
            ]
          );
        }
      });

  return (
    <TouchableOpacity onPress={ApplyChallenge}>
      <Button>
        <Text>{"인증하기"}</Text>
      </Button>
    </TouchableOpacity>
  );
};
export default CertiBtn;
