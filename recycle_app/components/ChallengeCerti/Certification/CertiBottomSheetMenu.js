import React, { useState, useRef } from "react";
import { BottomSheet, ListItem } from "@rneui/themed";
import {
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Alert,
  Text,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import RBSheet from "react-native-raw-bottom-sheet";
import { useNavigation } from "@react-navigation/native";

import { Button } from "@rneui/themed";

const { width, height } = Dimensions.get("screen");

const BottomSheetMenu = ({ challenge_id, certification_id }) => {
  const refRBSheet = useRef();
  const navigation = useNavigation();

  const buttonStyle = {
    backgroundColor: "white",
    borderWidth: 5,
    borderColor: "white",
    borderRadius: 20,
    height: 60,
  };
  const buttonContainerStyle = {
    width: width / 1.1,
    marginHorizontal: 2,
    marginVertical: 5,
  };
  const list = [
    {
      title: "카메라",
      onPress: () => {
        refRBSheet.current.close();
        return navigation.navigate("Camera", {
          challenge_id: challenge_id,
          certification_id: certification_id,
        });
      },
    },
    {
      title: "Cancel",

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
    <>
      <Button
        title="인증하기"
        buttonStyle={{
          backgroundColor: "black",
          borderWidth: 2,
          borderColor: "white",
          borderRadius: 30,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        titleStyle={{ fontWeight: "bold" }}
        onPress={() => refRBSheet.current.open()}
      />

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={false}
        closeOnPressMask={true}
        animationType={"slide"}
        closeDuration={10}
        customStyles={{
          container: {
            alignItems: "center",
            height: height / 5.5,
            backgroundColor: "transparent",
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
        }}
      >
        {list.map((list, i) => (
          <Button
            key={i}
            title={list.title}
            buttonStyle={buttonStyle}
            containerStyle={buttonContainerStyle}
            titleStyle={{ fontWeight: "bold", color: "black" }}
            onPress={list.onPress}
          />
        ))}
      </RBSheet>
    </>
  );
};

export default BottomSheetMenu;
