import React, { useState, useEffect } from "react";
import { Image, View, Platform } from "react-native";
import { Text, Button, Divider, Tile } from "@rneui/themed";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { Feather } from "@expo/vector-icons";

export default ({ title }) => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <TouchableOpacity
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={pickImage}
    >
      {!image ? (
        <>
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
        </>
      ) : (
        <Image
          source={{ uri: image }}
          style={{
            width: 200,
            height: 200,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        />
      )}
    </TouchableOpacity>
  );
};
