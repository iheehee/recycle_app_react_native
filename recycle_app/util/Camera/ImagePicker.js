import React, { useState, useEffect } from "react";
import { Image, View, StyleSheet } from "react-native";

import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { createChallenge } from "../../modules/createChallengeSlice";

export default ({}) => {
  const [image, setImage] = useState(null);
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
      setImage(result.assets[0].uri);
    }
  };

  useEffect(() => {
    if (image) {
      dispatch(
        createChallenge({
          title_banner: image,
        })
      );
    }
  }, [image]);
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        height: 150,
        width: 150,
        marginRight: 20,
      }}
      onPress={pickImage}
    >
      <View
        style={{
          width: 150,
          height: 150,
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
          </View>
        ) : (
          <View>
            <Image
              source={{ uri: image }}
              style={{
                width: 150,
                height: 150,
                borderRadius: 15,
                borderRadius: 15,
              }}
            />
          </View>
        )}
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
