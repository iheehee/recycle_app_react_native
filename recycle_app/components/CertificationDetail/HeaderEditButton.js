import React from "react";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";

const EditButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
`;

export default ({ onPress, certificationData }) => {
  const navigation = useNavigation();

  return (
    <EditButton
      onPress={() =>
        navigation.navigate(onPress, { certification_data: certificationData })
      }
    >
      <Text style={{ color: "black", fontSize: 19 }}>Edit</Text>
    </EditButton>
  );
};
