import React, { useState } from "react";
import { TouchableOpacity, Dimensions } from "react-native";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import Btn from "../../components/Auth/Btn";

const { width } = Dimensions.get("screen");

const InputContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Container = styled.TextInput`
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
      }
    } catch (e) {
      alert("The email is taken");
    } finally {
    }
  };
  return (
    <InputContainer>
      <Container
        placeholder={"Email"}
        value={email}
        autocapitalize="off"
        onChangeText={(text) => setEmail(text)}
      />
      <Container
        placeholder={"Password"}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Container
        placeholder={"Nickname"}
        value={nickname}
        autocapitalize="none"
        onChangeText={(text) => setNickname(text)}
      />
      <Container
        placeholder={"Username"}
        value={username}
        autocapitalize="none"
        onChangeText={(text) => setUsername(text)}
      />
      <Btn
          loading={loading}
          text={"Sign Up"}
          onPress={handleSubmit}
        ></Btn>
    </InputContainer>
  );
};
