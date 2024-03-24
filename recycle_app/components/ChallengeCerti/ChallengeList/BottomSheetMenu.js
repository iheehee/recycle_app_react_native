import React, { useState } from "react";
import { BottomSheet, ListItem } from "@rneui/themed";
import {
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Alert,
  Text,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Ip from "../../../util/Ip";
import axios from "axios";
import { getMyChallenges } from "../../../modules/userSlice";

const { width, height } = Dimensions.get("screen");

const BottomSheetMenu = (params) => {
  const { challengeId } = params;
  const jwt = useSelector((state) => state.usersReducer.token);
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const contentStyle = {
    width: width,
    alignItems: "center",
  };
  const list = [
    {
      title: "채린지 탈퇴하기",
      contentStyle: contentStyle,
      onPress: () => leaveChallenge(challengeId, jwt),
    },
    {
      title: "Cancel",
      containerStyle: {
        backgroundColor: "red",
      },
      contentStyle: contentStyle,
      titleStyle: { color: "white" },
      onPress: () => setIsVisible(false),
    },
  ];
  const leaveChallenge = (challengeId, jwt) => {
    return Alert.alert("챌린지를 탈퇴 하시겠습니까?", "", [
      {
        text: "확인",
        onPress: () => {
          axios({
            method: "delete",
            url:
              Ip.localIp +
              "/challenges/leave_challenge/?challenge_id=" +
              challengeId,
            headers: {
              Authorization: jwt,
              "Content-Type": "application/json",
            },
          }).then((response) => {
            const { result } = response.data;
            Alert.alert(result, "", [
              {
                text: "확인",
                onPress: () => {
                  dispatch(getMyChallenges(jwt));
                },
              },
            ]);
          });
        },
      },
      {
        text: "취소",
        style: "destructive",
      },
    ]);
  };

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => setIsVisible(true)}>
        <MaterialCommunityIcons name="dots-vertical" size={24} color="black" />
      </TouchableOpacity>
      <BottomSheet
        containerStyle={{ marginBottom: 20 }}
        onBackdropPress={() => setIsVisible(false)}
        modalProps={{}}
        isVisible={isVisible}
      >
        {list.map((l, i) => (
          <ListItem
            key={i}
            containerStyle={l.containerStyle}
            onPress={l.onPress}
          >
            <ListItem.Content style={l.contentStyle}>
              <Text style={l.titleStyle}>{l.title}</Text>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
    </SafeAreaView>
  );
};

export default BottomSheetMenu;
