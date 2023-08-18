import React from "react";
import styled from "styled-components/native";
import ImagePicker from "../../../../util/Camera/ImagePicker";
import { Dimensions, Image, Text, ScrollView, View } from "react-native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const StyledText = styled.Text`
  font-size: 30px;
`;

export default () => {
  return (
    <Container>
      <ImagePicker />
      <Text style={{ fontSize: 34 }}>Test</Text>
      <Text style={{ fontSize: 34 }}>Profile</Text>
      <Text style={{ fontSize: 34 }}>Profile</Text>
      <Text style={{ fontSize: 34 }}>Profile</Text>
      <Text style={{ fontSize: 34 }}>Profile</Text>
      <Text style={{ fontSize: 34 }}>Profile</Text>
      <Text style={{ fontSize: 34 }}>Profile</Text>
      <Text style={{ fontSize: 34 }}>Profile</Text>
      <Text style={{ fontSize: 34 }}>Profile</Text>
      <Text style={{ fontSize: 34 }}>Profile</Text>
      <Text style={{ fontSize: 34 }}>Profile</Text>
      <Text style={{ fontSize: 34 }}>Profile</Text>
      <Text style={{ fontSize: 34 }}>Profile</Text>
    </Container>
  );
};