import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import CountDown from "react-native-countdown-component";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const BgContainer = styled.View`
  align-items: center;
  justify-content: space-between;
`;

const Certification = () => {
  const [running, setRunning] = useState(false);
  let saveTime;
  /* const [saveTime, setSaveTime] = useState(0); */
  return (
    <BgContainer>
      <CountDown
        size={30}
        until={3600}
        running={running}
        onFinish={() => alert("Finished")}
        onChange={null}
        digitStyle={{
          backgroundColor: "#FFF",
        }}
        digitTxtStyle={{ color: "#1CC625" }}
        timeLabelStyle={{ color: "red", fontWeight: "bold" }}
        separatorStyle={{ color: "#1CC625" }}
        timeToShow={["H", "M", "S"]}
        timeLabels={{ m: null, s: null }}
        showSeparator
      />
      <TouchableOpacity
        onPress={() => (running ? setRunning(false) : setRunning(true))}
      >
        {!running ? (
          <FontAwesome5 name="play-circle" size={60} color="black" />
        ) : (
          <FontAwesome5 name="pause-circle" size={60} color="black" />
        )}
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>시간 저장하기</Text>
      </TouchableOpacity>
    </BgContainer>
  );
};
{
  /* <Image
              source={{ uri: BASE_URI + item }}
              containerStyle={styles.item}
              PlaceholderContent={<ActivityIndicator />}
            /> */
}
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
