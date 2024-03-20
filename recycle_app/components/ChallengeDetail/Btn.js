import React from "react";
import { TouchableOpacity, Alert } from "react-native";
import styled from "styled-components/native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { getMyChallenges } from "../../modules/userSlice";
import api from "../../api";

const Button = styled.View`
  border-radius: 10px;
  padding: 14px 0px;
  width: 195px;
  background-color: ${(props) => (!props.exist ? "green" : "#C0C0C0")};
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
    (state) => state.usersReducer.profile.myChallenges
  );
  const exist = myChallenge.find(
    (appliedChallenge) => appliedChallenge.id === params.id
  );
  const ApplyChallenge = () => {
    Alert.alert("챌린지에 가입하시겠습니까?", "", [
      {
        text: "확인",
        onPress: () => {
          return api
            .challengeApply(params.id, null, jwt)
            .then((response) => {
              dispatch(getMyChallenges(jwt));
              const result = response.data.result;
              return Alert.alert(result, "", [
                {
                  text: "확인",
                  onPress: () => {
                    return Alert.alert("인증화면으로 가시겠습니까?", "", [
                      {
                        text: "이동",
                        onPress: () => {
                          return navigation.navigate("인증", {
                            screen: "MyChallenge",
                          });
                        },
                      },
                      {
                        text: "취소",
                      },
                    ]);
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
        },
      },
      { text: "취소", style: "destructive" },
    ]);
  };
  const Certification = () =>
    navigation.navigate("ChallengeCerti", {
      screen: "ChallengeCertiDetail",
      params: params,
    });

  return !exist ? (
    <TouchableOpacity onPress={ApplyChallenge}>
      <Button exist={exist}>
        <Text>{"오늘부터 시작"}</Text>
      </Button>
    </TouchableOpacity>
  ) : (
    <Button exist={exist}>
      <Text>{"참여 중인 챌린지 입니다."}</Text>
    </Button>
  );
};
export default Btn;
