import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Dimensions,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import styled from "styled-components/native";
import { userLogin } from "../../modules/userSlice";
import Btn from "../../components/Auth/Btn";
import utils from "../../utils";
import { useDispatch, useSelector } from "react-redux";

const { width } = Dimensions.get("screen");

const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

const InputContainer = styled.View`
  align-items: center;
`;

const Input = styled.TextInput`
  width: ${width / 1.5}px;
  padding: 12.5px 20px;
  border: 1px solid grey;
  background-color: white;
  border-radius: 30px;
  margin-bottom: 10px;
  font-weight: 500;
`;

export default ({ route: { params } }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(params?.email);
  const [password, setPassword] = useState(params?.password);
  const isValid = () => {
    if (email === "" || password === "") {
      alert("정보를 모두 기입해주세요.");
      return false;
    }
    if (!utils.isEmail(email)) {
      alert("Email 주소가 유효하지 않습니다.");
      return false;
    }
    return true;
  };
  const isLoggedIn = useSelector((state) => state.token);
  const handleSubmit = async () => {
    if (!isValid()) {
      return;
    }
    dispatch(
      userLogin({
        email: email,
        password: password,
      })
    );
  };
  const onPress = () => Keyboard.dismiss();
  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={onPress}>
        <Container>
          <InputContainer>
            <Input
              keyboardType="email-address"
              placeholder={"Email"}
              value={email}
              autoCapitalize="none"
              onChangeText={(text) => setEmail(text)}
            />
            <Input
              placeholder={"Password"}
              autoCapitalize="none"
              secureTextEntry={"true"}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <Btn text={"Sign In"} onPress={handleSubmit} />
          </InputContainer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
