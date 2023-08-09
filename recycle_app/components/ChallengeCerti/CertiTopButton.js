import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Alert,
  Dimensions,
  Text,
} from "react-native";
import styled from "styled-components/native";
import ChallengeCertification from "../../screens/Main/Challenge/ChallengeCertification";
import Profile from "../../screens/Main/Profile";

const TopButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  flex: 1;
`;
const FirstButton = styled.TouchableOpacity`
  border-bottom-color: ${(props) =>
    props.isFocused === "myStatus" ? "black" : null};
  border-bottom-width: ${(props) =>
    props.isFocused === "myStatus" ? "2px" : "0px"};
  width: 45%;
  padding-bottom: 5px;
  margin: 5px 15px;
  align-items: center;
  justify-content: center;
  height: 35px;
`;
const SecondButton = styled.TouchableOpacity`
  border-bottom-color: ${(props) =>
    props.isFocused === "otherPeople" ? "black" : null};
  border-bottom-width: ${(props) =>
    props.isFocused === "otherPeople" ? "2px" : "0px"};
  width: 45%;
  padding-bottom: 5px;
  margin: 5px 15px;
  align-items: center;
  justify-content: center;
  height: 35px;
`;
const FirstText = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => (props.isFocused === "myStatus" ? "black" : "grey")};
`;
const SecondText = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => (props.isFocused === "otherPeople" ? "black" : "grey")};
`;
const Separator = () => <View style={styles.separator} />;

const TopButton = () => {
  const [focused, setFocused] = useState("myStatus");

  return (
    <View>
      <TopButtonContainer>
        <FirstButton
          onPress={() => setFocused("myStatus")}
          isFocused={focused}
          activeOpacity={1}
        >
          <FirstText isFocused={focused}>나의 인증 현황</FirstText>
        </FirstButton>
        <SecondButton
          onPress={() => setFocused("otherPeople")}
          isFocused={focused}
          activeOpacity={1}
        >
          <SecondText isFocused={focused}>참가자 인증 현황</SecondText>
        </SecondButton>
      </TopButtonContainer>
      <View>
        {focused === "myStatus" ? <Profile /> : <ChallengeCertification />}
      </View>
    </View>
  );
};

export default TopButton;
