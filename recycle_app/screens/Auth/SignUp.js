import {
  KeyboardAvoidingView,
  KeyboardAwareScrollView,
  TouchableWithoutFeedback,
  Dimensions,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import styled from "styled-components/native";
import Btn from "../../components/Auth/Btn";

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

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const isValid = () => {
    if (email === "" || password === "" || nickname === "" || username === "") {
      alert("정보를 모두 기입해주세요.");
      return false;
    }
    if (!utils.isEmail(email)) {
      alert("Please add a valid email.");
      return false;
    }
  };
  const handleSubmit = async () => {
    if (!isValid()) {
      return;
    }
    try {
      const { status } = await api.createAccount({
        email,
        password,
        nickname: nickname,
        username: username,
      });
      if (status === 201) {
        alert("Account created. Sign in, please.");
        navigate("SignIn");
      }
    } catch (e) {
      alert("The email is taken");
    } finally {
    }
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
              secureTextEntry="true"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <Input
              placeholder={"Nickname"}
              value={nickname}
              autoCapitalize="none"
              onChangeText={(text) => setNickname(text)}
            />
            <Input
              placeholder={"Username"}
              value={username}
              autoCapitalize="none"
              onChangeText={(text) => setUsername(text)}
            />
            <Btn text={"Sign Up"} onPress={handleSubmit} />
          </InputContainer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
