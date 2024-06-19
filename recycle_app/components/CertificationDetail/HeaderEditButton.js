import React from "react";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";

const EditButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
`;

export default ({ navigation, text, onPress }) => {
  console.log("에디트");
  return (
    <EditButton onPress={() => navigation.navigate(onPress)}>
      <Text style={{ color: "black", fontSize: 19 }}>{text}</Text>
    </EditButton>
  );
};
