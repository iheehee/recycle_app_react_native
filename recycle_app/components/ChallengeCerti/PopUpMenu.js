import React, { useState } from "react";
import { BottomSheet, Button, ListItem } from "@rneui/themed";
import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert,
  SafeAreaView,
  Text,
} from "react-native";
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
      (response) => {
        dispatch(getMyChallenges(jwt));
        return console.log(response.data);
      }
      /* () => aa(challengeId, jwt) */
    );
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
