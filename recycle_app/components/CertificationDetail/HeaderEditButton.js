import React from "react";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";

const EditButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
`;

export default ({ text, onPress }) => {
  const navigation = useNavigation();
  return (
    <EditButton
      onPress={() =>
        text === "Edit"
          ? navigation.navigate(onPress)
          : api.modified_Certification()
      }
    >
      <Text style={{ color: "black", fontSize: 19 }}>{text}</Text>
    </EditButton>
  );
};
