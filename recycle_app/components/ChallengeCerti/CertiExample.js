import React from "react";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;
const TextContainer = styled.Text`
  margin-left: 15px;
  font-size: 16px;
  font-weight: 500;
`;
const CameraIconContainer = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
`;

const CertiExample = () => {
  return (
    <Container>
      <CameraIconContainer>
        <Feather name="camera" size={24} color="black" />
        <TextContainer>인증 방법 및 인증샷 예시</TextContainer>
      </CameraIconContainer>
      <Entypo name="chevron-small-right" size={26} color="gray" />
    </Container>
  );
};

export default CertiExample;
