import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Btn = styled.View`
border-radius: 20px;
padding: 13px 0px;
width: 200px;
background-color: green;
align-items: center;
justify-content: center;
`

export default () => {
  return (
    <Container>
      <TouchableOpacity>
      <Btn>
        <Text style={{alignItems: "center", justifyContent: "center"}}>Sign In</Text>
      </Btn>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Sign up</Text>
      </TouchableOpacity>
    </Container>
  );
};
