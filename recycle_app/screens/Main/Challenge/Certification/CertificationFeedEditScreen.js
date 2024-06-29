import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
} from "react-native";

import styled from "styled-components/native";

import api from "../../../../api";
import { addCertifications } from "../../../../modules/certificationSlice";
import * as ImagePicker from "expo-image-picker";

import { Ionicons, Feather, FontAwesome } from "@expo/vector-icons";
import HeaderSaveButton from "../../../../components/CertificationDetail/HeaderSaveButton";

const { width, height } = Dimensions.get("screen");
const BgContainer = styled.View`
  flex: 1;
  background-color: #050d18;
`;
const DiaryTitleContainer = styled.View`
  align-items: flex-end;
  flex-direction: row;
  justify-content: space-between;
  margin-horizontal: 18px;
  margin-top: 40px;
`;
const DiaryBodyTextContainer = styled.View`
  height: 300px;
  width: 400px;
  margin: 12px;
  border-width: 1px;
  border-color: white;
  color: "white";
  font-size: 16;
  padding: 10px;
`;
const IconContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
const WriteButtonContainer = styled.View`
  align-items: center;
  justify-content: center;
  background-color: black;
  width: ${width / 1.05}px;
  height: ${height / 14}px;
  border-radius: 15px;
`;
const ImageContainer = styled.TouchableOpacity`
  background-color: #09172b;
  width: ${width}px;
  height: ${height / 3}px;
  align-items: center;
  justify-content: center;
`;

const CertificationDetailScreen = ({ route, navigation }) => {
  const { challenge_id, certification_num, certification_diary } =
    route.params.certification_data;

  const [image, setImage] = useState(null);
  const [inputTextValue, setInputTextValue] = useState(certification_diary);

  useEffect(() => {
    navigation
      ? navigation.setOptions({
          headerRight: () => (
            <HeaderSaveButton data_to_modify={data_to_modify} image={image} />
          ),
        })
      : null;
  }, [inputTextValue, image]);

  const data_to_modify = {
    challenge_id: challenge_id,
    certification_num: certification_num,
    certification_diary: inputTextValue,
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0,
      height: 1080,
      width: 1080,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <BgContainer>
      <ImageContainer onPress={() => pickImage()}>
        {image ? (
          <Image
            source={{ uri: image }}
            style={{
              width: width,
              height: height / 3,
            }}
          />
        ) : (
          <>
            <FontAwesome name="camera" size={50} color="white" />
            <Text style={{ color: "white", fontSize: 14 }}>Add Image</Text>
          </>
        )}
      </ImageContainer>
      <DiaryTitleContainer>
        <IconContainer>
          <Ionicons name="journal-outline" size={30} color="white" />
          <Text style={{ color: "white", fontSize: 28, marginLeft: 5 }}>
            Diary
          </Text>
        </IconContainer>
      </DiaryTitleContainer>

      <TextInput
        editable
        multiline
        maxLength={300}
        value={inputTextValue}
        style={{
          height: 300,
          width: 400,
          margin: 12,
          borderWidth: 1,
          borderColor: "white",
          color: "white",
          fontSize: 16,
          padding: 10,
        }}
        onChangeText={(e) => setInputTextValue(e)}
      />
    </BgContainer>
  );
};

export default CertificationDetailScreen;
