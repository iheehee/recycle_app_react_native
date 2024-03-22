import React, { useState, useRef } from "react";
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
import { FontAwesome5 } from "@expo/vector-icons";
/* import { CountDown } from "react-native-customizable-countdown"; */

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

const Couter = ({ initialTime, reset, run }) => {
  const myRef = useRef();
  const [running, setRunning] = useState(false);

  const [finished, setFinishied] = useState(false);
  /* const [saveTime, setSaveTime] = useState(0); */
  return (
    <BgContainer>
      <Image
        source={require("../../PvDn.gif")}
        style={{
          width: 280,
          height: 280,
          borderRadius: 150,
          marginVertical: 50,
        }}
      />
      {/* <Text style={{ color: "white", fontSize: 18 }}>나를 증명하라</Text> */}
      <CountDown
        size={40}
        until={3600}
        running={running}
        onFinish={null}
        onChange={(e) => console.log(e)}
        digitStyle={{
          backgroundColor: null,
          marginHorizontal: -12,
        }}
        digitTxtStyle={{ color: "white" }}
        separatorStyle={{ color: "white" }}
        timeToShow={["H", "M", "S"]}
        timeLabels={{ m: null, s: null }}
        showSeparator
      />

      <ButtonContainer>
        {!running ? (
          <>
            <TouchableOpacity
              style={{ width: width / 3.3, paddingLeft: 4 }}
              onPress={() => myRef.current.resetCountDown()}
            >
              <Text style={{ color: "white", fontSize: 18, textAlign: "left" }}>
                Reset
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={{}}
              onPress={() => (running ? setRunning(false) : setRunning(true))}
              /* running ? setRunning(false) : setRunning(true))} */
            >
              <FontAwesome5 name="play-circle" size={80} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={{ width: width / 3.3 }}>
              <Text
                style={{ color: "white", fontSize: 18, textAlign: "right" }}
              >
                시간 저장
              </Text>
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity
            activeOpacity={1}
            style={{}}
            onPress={() => (running ? setRunning(false) : setRunning(true))}
          >
            <FontAwesome5 name="pause-circle" size={80} color="white" />
          </TouchableOpacity>
        )}
      </ButtonContainer>
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

export default Couter;
