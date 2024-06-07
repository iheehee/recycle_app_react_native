import React from "react";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";

const EditButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
`;

export default ({ text, onPress }) => {
  const navigation = useNavigation();
  return (
    <EditButton onPress={() => navigation.navigate(onPress)}>
      <Text style={{ color: "black", fontSize: 19 }}>{text}</Text>
    </EditButton>
  );
};
