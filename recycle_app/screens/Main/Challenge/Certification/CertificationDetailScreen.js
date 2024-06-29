import React, { useState, useEffect } from "react";
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

import * as ImagePicker from "expo-image-picker";

import { Ionicons, Feather, FontAwesome } from "@expo/vector-icons";

import HeaderEditButton from "../../../../components/CertificationDetail/HeaderEditButton";
import Ip from "../../../../util/Ip";

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
  border-color: #0d2340;
  border-radius: 20px;
  border-width: 6px;
  padding: 10px;
  background-color: #09182c;
`;
const IconContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
/* const WriteButtonContainer = styled.View`
  align-items: center;
  justify-content: center;
  background-color: black;
  width: ${width / 1.05}px;
  height: ${height / 14}px;
  border-radius: 15px;
`; */
const ImageContainer = styled.View`
  background-color: #09172b;
  width: ${width}px;
  height: ${height / 2.5}px;
  align-items: center;
  justify-content: center;
`;

const CertificationDetailScreen = ({ navigation, route }) => {
  const certification_data = route.params.certification_data;
  const [image, setImage] = useState(null);

  /* 헤더의 오른쪽 버튼
  : 버튼 컴포넌트에 어느 챌린지의 몇번 째 인증인지를 props로 보낸다.*/
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderEditButton
          certificationData={certification_data}
          onPress={"CertificationFeedEditScreen"}
        />
      ),
    });
  }, []);
  console.log(route.params.certification_data.certification_photo);
  return (
    <BgContainer>
      <ImageContainer>
        {route.params.certification_data.certification_photo !== null ? (
          <Image
            source={{
              uri:
                Ip.localIp +
                route.params.certification_data.certification_photo,
            }}
            style={{
              width: width,
              height: height / 2.5,
            }}
          />
        ) : (
          <>
            <FontAwesome name="image" size={50} color="white" />
            <Text style={{ color: "white", fontSize: 14 }}>Not Image</Text>
          </>
        )}
      </ImageContainer>
      <DiaryTitleContainer>
        <IconContainer>
          <Ionicons name="journal-outline" size={24} color="white" />
          <Text style={{ color: "white", fontSize: 22, marginLeft: 5 }}>
            Diary
          </Text>
        </IconContainer>
      </DiaryTitleContainer>

      <DiaryBodyTextContainer>
        <Text style={{ color: "white", fontSize: 16 }}>
          {route.params.certification_data.certification_diary}
        </Text>
      </DiaryBodyTextContainer>
    </BgContainer>
  );
};

export default CertificationDetailScreen;
