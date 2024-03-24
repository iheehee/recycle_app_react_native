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
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("screen");

const BottomSheetMenu = ({ isVisible }) => {
  const [bottomMenuIsVisible, setbottomMenuIsVisible] = useState(isVisible);
  const contentStyle = {
    width: width,
    alignItems: "center",
  };
  const list = [
    {
      title: "카메라",
      contentStyle: contentStyle,
      onPress: () => leaveChallenge(challengeId, jwt),
    },
    {
      title: "Cancel",

      contentStyle: contentStyle,
      titleStyle: { color: "white" },
      onPress: () => setbottomMenuIsVisible(false),
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
      <BottomSheet
        containerStyle={{ marginBottom: 20 }}
        onBackdropPress={() => setbottomMenuIsVisible(false)}
        modalProps={{}}
        isVisible={bottomMenuIsVisible}
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
