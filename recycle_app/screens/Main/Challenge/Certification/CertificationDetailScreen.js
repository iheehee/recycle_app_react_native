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

import { Ionicons, Feather, FontAwesome } from "@expo/vector-icons";

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
  font-size: 16px;
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
const ImageContainer = styled.View`
  background-color: #09172b;
  width: ${width}px;
  height: ${height / 3}px;
  align-items: center;
  justify-content: center;
`;

const CertificationDetailScreen = ({ route }) => {
  const [image, setImage] = useState(null);

  return (
    <BgContainer>
      <ImageContainer>
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
            <FontAwesome name="image" size={50} color="white" />
            {/* <Text style={{ color: "white", fontSize: 14 }}>Not Image</Text> */}
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

      {/* <WriteButtonContainer>
        <Button
          title="White Diary"
          buttonStyle={{
            backgroundColor: "#09172b",
            borderRadius: 10,
          }}
          containerStyle={{
            width: width / 1.12,
            marginVertical: 10,
          }}
          titleStyle={{ fontWeight: "bold" }}
        />
      </WriteButtonContainer> */}
      <DiaryBodyTextContainer></DiaryBodyTextContainer>
      {/* <TextInput
        editable
        multiline
        maxLength={300}
        value={name}
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
      /> */}
    </BgContainer>
  );
};

export default CertificationDetailScreen;
