import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";

import CountDown from "react-native-countdown-component";
import BottomMenuButton from "../../../../components/ChallengeCerti/Certification/CertiBottomSheetMenu";
import api from "../../../../api";
import { setMyCertifications } from "../../../../modules/certificationSlice";

import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Button } from "@rneui/themed";

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

const Couter = ({ route }) => {
  const navigation = useNavigation();
  const [running, setRunning] = useState(false);
  const [finished, setFinishied] = useState(false);
  const [bottomMenuIsVisible, setBottomMenuIsVisible] = useState(false);

  const { challengeId, certificationId } = route.params;

  const dispatch = useDispatch();
  const jwt = useSelector((state) => state.usersReducer.token);
  const callApi = async () => {
    const formData = new FormData();
    /* formData.append("file", {
            name: `${id}.jpeg`,
            type: "image/jpeg",
            uri: image,
          }); */

    const document = {
      certification_id: certificationId,
      challenge_id: challengeId,
    };
    formData.append("document", JSON.stringify(document));
    const { data } = await api.createCertification(challengeId, formData, jwt);
    dispatch(setMyCertifications(data));
  };

  return (
    <BgContainer>
      <Image
        source={require("../../../../PvDn.gif")}
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
        until={1}
        running={running}
        onFinish={() => setFinishied(true)}
        onChange={(e) => e}
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
      {finished === false ? (
        <ButtonContainer>
          {!running ? (
            <>
              <TouchableOpacity
                style={{ width: width / 3.8 }}
                onPress={() => myRef.current.resetCountDown()}
              >
                <FontAwesome
                  name="trash-o"
                  size={34}
                  color="white"
                  style={{ textAlign: "left" }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={1}
                style={{}}
                onPress={() => (running ? setRunning(false) : setRunning(true))}
              >
                <FontAwesome5 name="play-circle" size={80} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={{ width: width / 3.5 }}>
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
      ) : (
        <>
          <BottomMenuButton />
          <Button
            title="건너뛰기"
            buttonStyle={{
              backgroundColor: "black",
              borderWidth: 2,
              borderColor: "white",
              borderRadius: 30,
            }}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
            titleStyle={{ fontWeight: "bold" }}
            onPress={() => {
              callApi();
              navigation.goBack();
            }}
          />
        </>
      )}
    </BgContainer>
  );
};

export default Couter;