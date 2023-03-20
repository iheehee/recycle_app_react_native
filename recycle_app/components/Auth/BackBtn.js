import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from '@expo/vector-icons'; 


const Container = styled.View`
    padding-left: 18px;
    
`;

export default () => (
  <Container>
    <EvilIcons name="chevron-down" size={32} color="black" />
  </Container>
)