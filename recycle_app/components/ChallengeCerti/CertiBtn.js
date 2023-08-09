import React from "react";
import { Alert } from "react-native";
import styled from "styled-components/native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { getProfile } from "../../modules/userSlice";
import api from "../../api";
import ImagePicker from "../../util/Camera/ImagePicker";

const Button = styled.TouchableOpacity`
  margin: 0px 0px 0px 0px;
  border-radius: 10px;
  padding: 17px 120px;
  width: 100%;
  background-color: black;
  align-items: center;
`;
const Text = styled.Text`
  color: white;
  justify-content: "center";
  font-size: 15px;
`;
const PeriodContainer = styled.View`
  width: 100%;
  flex: 1;
  padding: 0px 0px 0px 0px;
  align-items: center;
`;
const CertiBtn = () => {
  const navigation = useNavigation();
  const ImagePicker = () => navigation.navigate("ImagePicker");

  return (
    <Button onPress={ImagePicker}>
      <Text>{"인증하기"}</Text>
    </Button>
  );
};
export default CertiBtn;
