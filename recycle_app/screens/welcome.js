import React from "react";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import Btn from "../components/Auth/Btn";


const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;




export default ({ navigation }) => {
  const goToSignIn = () => navigation.navigate('SignIn');
  const goToSignUp = () => navigation.navigate('SignUp');
  return (
    <Container>
        <Btn onPress={goToSignIn} text={"Sign In"} /> 
        <Btn onPress={goToSignUp} text={"Sign Up"} /> 
    </Container>
  );
};
