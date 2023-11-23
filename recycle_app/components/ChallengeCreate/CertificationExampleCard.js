import React, { useState, useEffect } from "react";
import { Image, View, Platform, StyleSheet,  } from "react-native";
import { Text } from "@rneui/themed";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { createChallenge } from "../../modules/createChallengeSlice";

export default ({ title, type }) => {
  const [image, setImage] = useState(null);
  const [imageId, setImageId] = useState(null);
  const dispatch = useDispatch();
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImageId(result.assets[0].assetId);
      setImage(result.assets[0].uri);
    }
  };

  useEffect(() => {
    if (image) {
      dispatch(
        createChallenge(
          title === "인증 성공"
            ? {
                success_photo_example: {
                  id: imageId,
                  uri: image,
                },
              }
            : {
                fail_photo_example: {
                  id: imageId,
                  uri: image,
                },
              }
        )
      );
    }
  }, [image]);
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        height: 230,
        width: 200,
        marginRight: 20,
      }}
      onPress={pickImage}
    >
      <View
        style={{
          width: 200,
          height: 200,
          backgroundColor: "#EAECEE",
          flexDirection: "row",
          alignItems: "center",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
      >
        {!image ? (
          <View
            style={{
              alignItems: "center",
              paddingLeft: 15,
            }}
          >
            <Feather name="camera" size={35} color="white" />

            {title === "인증 성공" ? (
              <Text style={{ color: "gray", marginTop: 10 }}>
                인증 성공 예시를 추가해주세요.
              </Text>
            ) : (
              <Text style={{ color: "gray", marginTop: 10 }}>
                인증 실패 예시를 추가해주세요.
              </Text>
            )}
          </View>
        ) : (
          <View>
            <Image
              source={{ uri: image }}
              style={{
                width: 200,
                height: 200,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
              }}
            />
          </View>
        )}
      </View>
      <View
        style={{
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          width: 200,
          height: 30,
          backgroundColor:
            image && title === "인증 성공"
              ? "green"
              : image && title === "인증 실패"
              ? "red"
              : "gray",
          alignItems: "center",
        }}
      >
        <Text style={styles.subHeader}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  subHeader: {
    color: "white",
    marginTop: 6,
  },
});
