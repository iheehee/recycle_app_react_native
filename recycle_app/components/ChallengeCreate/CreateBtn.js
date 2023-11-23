import React, { useState } from "react";
import { View, Alert, ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Ip from "../../util/Ip";
import LoadingScreen from "./LoadingScreen";

const Button = styled.TouchableOpacity`
  margin: 0px 0px 0px 0px;
  border-radius: 10px;
  padding: 15px 0px;
  width: 80%;
  background-color: black;
  align-items: center;
`;
const Text = styled.Text`
  color: white;
  font-size: 15px;
`;

const CreateBtn = () => {
  const navigation = useNavigation();
  const jwt = useSelector((state) => state.usersReducer.token);
  const baseUrl = Ip.localIp;
  const newChallenge = useSelector(
    (state) => state.createChallengeReducer.newChallenge
  );
  const formData = new FormData();
  const jsonData = {
    title: newChallenge.title,
    summery: newChallenge.summery,
    description: newChallenge.description,
    start_day: newChallenge.start_day,
    frequency: newChallenge.frequency,
    duration: newChallenge.duration,
    max_member: newChallenge.max_member,
    certifications_start_time: newChallenge.certifications_start_time,
    certifications_end_time: newChallenge.certifications_end_time,
    certification_notice: newChallenge.certification_notice,
  };

  formData.append("document", JSON.stringify(jsonData));
  const successPhotoEx = newChallenge.success_photo_example;
  const failPhotoEx = newChallenge.fail_photo_example;
  const photoType = [successPhotoEx, failPhotoEx];
  for (const type of photoType) {
    if (type !== null) {
      formData.append(
        type === successPhotoEx ? "success_photo" : "fail_photo",
        {
          name:
            type === successPhotoEx
              ? `${jsonData.title}_` + "success_photo.jpeg"
              : `${jsonData.title}_` + "fail_photo.jpeg",
          type: "image/jpeg",
          uri: type?.uri,
        }
      );
    }
  }
  /* formData.append("file", {
    name: `${jsonData.title}_photo.jpeg`,
    type: "image/jpeg",
    uri: successPhotoEx?.uri,
  }); */

  const createChallenge = () => {
    try {
      Alert.alert("챌린지를 개설하시겠습니까?", "", [
        {
          text: "확인",
          onPress: async () =>
            await axios({
              method: "post",
              url: `${baseUrl}/challenges/`,
              data: formData,
              headers: {
                Authorization: jwt,
                "Content-Type": "multipart/form-data",
              },
            }).then((response) => {
              setlLoadingVisible(true);
              console.log(response);
            }),
        },
        {
          text: "취소",
        },
      ]);
    } catch (e) {
      console.log(e);
    }
  };
  /* createChallenge */
  const [loadingVisible, setlLoadingVisible] = useState(false);

  return (
    <View style={{ alignItems: "center" }}>
      {loadingVisible ? <LoadingScreen /> : null}
      <Button onPress={() => createChallenge()}>
        <Text>{"챌린지 개설하기"}</Text>
      </Button>
    </View>
  );
};
export default CreateBtn;
