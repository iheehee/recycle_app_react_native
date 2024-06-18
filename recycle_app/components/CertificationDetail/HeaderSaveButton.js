import React from "react";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import api from "../../api";

const EditButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
`;

export default ({ text, data }) => {
  const navigation = useNavigation();
  console.log(data);
  return (
    <EditButton onPress={() => null /* api.modified_Certification() */}>
      <Text style={{ color: "black", fontSize: 19 }}>Save</Text>
    </EditButton>
  );
};
