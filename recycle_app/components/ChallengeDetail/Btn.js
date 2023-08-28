import React from "react";
import { TouchableOpacity, Alert } from "react-native";
import styled from "styled-components/native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { getProfile } from "../../modules/userSlice";
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

  font-size: 14px;
`;
const Btn = ({ params }) => {
  const jwt = useSelector((state) => state.usersReducer.token);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const myChallenge = useSelector(
    (state) => state.usersReducer.profile.myChallenge
  );
  const exist = myChallenge.find(
    (appliedChallenge) => appliedChallenge === params.id
  );
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
  const Certification = () =>
    navigation.navigate("ChallengeCerti", {
      screen: "ChallengeCertiStatus",
      params: { dataTag: "challengeDatail", ...params },
    });

  return (
    <TouchableOpacity onPress={!exist ? ApplyChallenge : Certification}>
      <Button exist={exist}>
        <Text>{!exist ? "오늘부터 시작" : "인증하기"}</Text>
      </Button>
    </TouchableOpacity>
  );
};
export default Btn;
