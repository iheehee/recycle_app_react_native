import React, { useState, useRef, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import styled from "styled-components/native";
import CountDown from "react-native-countdown-component";
import Counter from "../../components/ChallengeCerti/Counter";
import { FontAwesome5 } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");
const BgContainer = styled.View`
  flex: 1;
  background-color: #050d18;
  align-items: center;
`;
const ButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Certification = ({ time }) => {
  /*  const [time, setTime] = useState(3600);
  const [running, setRunning] = useState(false);
  const [finished, setFinishied] = useState(false);
  const [reset, setReset] = useState(false); */
  /* const [saveTime, setSaveTime] = useState(0); */
  return (
    <BgContainer>
      <Counter initialTime={time} reset={false} run={false} />
    </BgContainer>
  );
};

const styles = StyleSheet.create({
  list: {
    width: "100%",
  },
  item: {
    backgroundColor: "grey",
    aspectRatio: 1,
    width: "100%",
    flex: 0.33333,
  },
});

export default Certification;
