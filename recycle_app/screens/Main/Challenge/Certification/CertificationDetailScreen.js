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

import CountDown from "react-native-countdown-component";
import BottomMenuButton from "../../../../components/ChallengeCerti/Certification/CertiBottomSheetMenu";
import api from "../../../../api";
import { addCertifications } from "../../../../modules/certificationSlice";

import { FontAwesome } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");
const BgContainer = styled.View`
  flex: 1;
  background-color: #050d18;
  align-items: center;
`;
const Container = styled.View`
  background-color: #09172b;
  width: ${width}px;
  height: ${height / 4}px;

  align-items: center;
  justify-content: center;
`;

const CertificationDetailScreen = ({ route }) => {
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
      <Container>
        <FontAwesome name="camera" size={50} color="white" />
        <Text style={{ color: "white", fontSize: 14 }}>Add Image</Text>
      </Container>
      <SimpleLineIcons name="note" size={24} color="white" />
      <Text style={{ color: "white", fontSize: 18 }}>Diary</Text>
      <TextInput
        editable
        multiline
        maxLength={300}
        style={{ height: 300, width: 400, margin: 12, borderWidth: 1 }}
      />
    </BgContainer>
  );
};

export default CertificationDetailScreen;
