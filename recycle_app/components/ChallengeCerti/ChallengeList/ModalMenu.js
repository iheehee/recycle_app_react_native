import React, { useRef } from "react";
import { View, TouchableOpacity, Dimensions, Alert } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from "@rneui/themed";
import { useSelector, useDispatch } from "react-redux";
import { getMyChallenges } from "../../../modules/userSlice";
import RBSheet from "react-native-raw-bottom-sheet";
import api from "../../../api";
import Ip from "../../../util/Ip";
import axios from "axios";

export default function ModalMenu({ challengeId }) {
  const refRBSheet = useRef();
  const dispatch = useDispatch();
  const jwt = useSelector((state) => state.usersReducer.token);
  const { width, height } = Dimensions.get("screen");

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
      title: "채린지 탈퇴하기",
      onPress: () => {
        axios({
          method: "delete",
          url: Ip.localIp + `/challenge/${challengeId}/`,
          headers: {
            Access: jwt,
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
      title: "취소",
      onPress: () => refRBSheet.current.close(),
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparents",
      }}
    >
      <TouchableOpacity
        onPress={() => refRBSheet.current.open()}
        style={{ backgroundColor: "#050d18" }}
      >
        <MaterialCommunityIcons name="dots-vertical" size={24} color="white" />
      </TouchableOpacity>

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={false}
        closeOnPressMask={true}
        animationType={"slide"}
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
    </View>
  );
}
