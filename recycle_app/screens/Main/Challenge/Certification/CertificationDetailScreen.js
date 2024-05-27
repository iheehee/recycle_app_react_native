import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";

import BottomMenuButton from "../../../../components/ChallengeCerti/Certification/CertiBottomSheetMenu";
import api from "../../../../api";
import { addCertifications } from "../../../../modules/certificationSlice";
import * as ImagePicker from "expo-image-picker";

import { Button } from "@rneui/themed";
import { FontAwesome } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");
const BgContainer = styled.View`
  flex: 1;
  background-color: #050d18;
`;
const DiaryContainer = styled.View`
  align-items: flex-start;
  margin-left: 20px;
  margin-top: 40px;
`;
const DiaryIconContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
const ImageContainer = styled.TouchableOpacity`
  background-color: #09172b;
  width: ${width}px;
  height: ${height / 3}px;

  align-items: center;
  justify-content: center;
`;

const CertificationDetailScreen = ({ route }) => {
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

  const navigation = useNavigation();

  const dispatch = useDispatch();
  const jwt = useSelector((state) => state.usersReducer.token);
  const callApi = async () => {
    const formData = new FormData();
    /* formData.append("file", {
              name: `${id}.jpeg`,
              type: "image/jpeg",
              uri: image,
            }); */

    const document = {
      certification_num: certification_id,
      challenge_id: challenge_id,
      certification_local_photo_url: "",
    };
    formData.append("document", JSON.stringify(document));
    const { data } = await api.createCertification(challenge_id, formData, jwt);
    dispatch(addCertifications({ challenge_id: challenge_id, data }));
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
      <DiaryContainer>
        <DiaryIconContainer>
          <SimpleLineIcons name="note" size={24} color="white" />
          <Text style={{ color: "white", fontSize: 20, marginLeft: 5 }}>
            Diary
          </Text>
        </DiaryIconContainer>
      </DiaryContainer>
      <Button
        title="건너뛰기"
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
      />
      <TextInput
        editable
        multiline
        maxLength={300}
        style={{
          height: 300,
          width: 400,
          margin: 12,
          borderWidth: 1,
          borderColor: "white",
          color: "whiteddd",
          fontSize: 18,
          padding: 10,
        }}
      />
    </BgContainer>
  );
};

export default CertificationDetailScreen;
