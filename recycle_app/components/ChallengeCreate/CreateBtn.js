import React, { useEffect, useState } from "react";
import { View, Alert, ActivityIndicator } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Ip from "../../util/Ip";
import LoadingScreen from "./LoadingScreen";
import { getMyChallenges } from "../../modules/userSlice";

const Button = styled.TouchableOpacity`
  margin: 0px 0px 0px 0px;
  border-radius: 10px;
  padding: 15px 0px;
  width: 80%;
  background-color: ${(props) => (props.focus ? "#DCDCDC" : "black")};
  align-items: center;
`;
const Text = styled.Text`
  color: white;
  font-size: 15px;
`;

const CreateBtn = () => {
  const baseUrl = Ip.localIp;
  const newChallenge = useSelector(
    (state) => state.createChallengeReducer.newChallenge
  );
  console.log(newChallenge);
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
              ? "success_ex_photo.jpeg"
              : "fail_ex_photo.jpeg",
          type: "image/jpeg",
          uri: type?.uri,
        }
      );
    }
  }
  const title_banner = newChallenge.title_banner;
  formData.append("title_banner", {
    name: jsonData.title + "title_banner.jpeg",
    type: "image/jpeg",
    uri: title_banner,
  });
  console.log(formData);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const jwt = useSelector((state) => state.usersReducer.token);
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
              timeout: 2000,
              headers: {
                Authorization: jwt,
                "Content-Type": "multipart/form-data",
              },
            }).then((response) => {
              const { result } = response.data;
              dispatch(getMyChallenges(jwt));
              Alert.alert(result, "", [
                {
                  text: "확인",
                  onPress: () => {
                    Alert.alert("인증화면으로 이동하시겠습니까?", "", [
                      {
                        text: "확인",
                        onPress: () => {
                          navigation.navigate("ChallengeIndex");
                          return navigation.navigate("MyChallenge");
                        },
                      },
                      {
                        text: "취소",
                      },
                    ]);
                  },
                },
              ]);
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

  const [loading, setLoading] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);
  const dataCheck = (data) => {
    let count = 0;
    for (const element in data) {
      if (data[element] === null) {
        return;
      }
      ++count;
    }
    count >= 12 ? setButtonVisible(false) : setButtonVisible(true);

    return null;
  };

  useEffect(() => {
    dataCheck(newChallenge);
  }, [newChallenge]);

  useEffect(() => {
    axios.interceptors.request.use(
      function (config) {
        setLoading(true);
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );
    axios.interceptors.response.use(
      function (response) {
        setLoading(false);
        console.log(response);
        return response;
      },
      function (error) {
        setLoading(false);
        return Promise.reject(error);
      }
    );
  }, []);

  return (
    <View style={{ alignItems: "center" }}>
      {loading ? <LoadingScreen /> : null}
      <Button
        onPress={() => createChallenge()}
        focus={buttonVisible}
        disabled={buttonVisible}
      >
        <Text>{"챌린지 개설하기"}</Text>
      </Button>
    </View>
  );
};
export default CreateBtn;
