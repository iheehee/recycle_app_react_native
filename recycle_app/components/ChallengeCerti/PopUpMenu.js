import React, { useState } from "react";
import { BottomSheet, Button, ListItem } from "@rneui/themed";
import { StyleSheet, TouchableOpacity, Dimensions, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import api from "../../api";
import Ip from "../../util/Ip";
import axios from "axios";
import { getMyChallenges } from "../../modules/userSlice";

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
  const aa = (challengeId, jwt) => {
    console.log(jwt);
    return axios({
      method: "delete",
      url:
        "http://192.168.0.55:8080/challenges/leave_challenge/?challenge_id=" +
        challengeId,
      headers: {
        Authorization: jwt,
        "Content-Type": "application/json",
      },
    }).then(
      (response) => dispatch(getMyChallenges(jwt))
      /* () => setIsVisible(true) */
    );
  };

  return (
    <SafeAreaProvider>
      <TouchableOpacity onPress={() => aa(challengeId, jwt)}>
        <MaterialCommunityIcons name="dots-vertical" size={24} color="black" />
      </TouchableOpacity>
      <BottomSheet
        containerStyle={{ marginBottom: 20 }}
        onBackdropPress={() => setIsVisible(false)}
        modalProps={{}}
        isVisible={isVisible}
      >
        {/* {list.map((l, i) => (
          <ListItem
            key={i}
            containerStyle={l.containerStyle}
            onPress={l.onPress}
          >
            <ListItem.Content style={l.contentStyle}>
              <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))} */}
      </BottomSheet>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
});

export default BottomSheetMenu;
