import React, { useState } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Dimensions,
  ImagePickerIOS,
} from "react-native";
import styled from "styled-components/native";
import { Text, Button, Divider } from "@rneui/themed";
import TimeButton from "../../../components/ChallengeCreate/TimeButton";
import ImagePicker from "../../../util/Camera/ImagePicker";

const { width, height } = Dimensions.get("screen");
const BgContainer = styled.View`
  flex: 1;
  background-color: white;
`;
const FrequencyContainer = styled.View``;
const DurationContainer = styled.View``;
const BeginDayContainer = styled.View``;
const CertificationTimeContainer = styled.View`
  padding: 12px 0px;
  border-width: 0.5px;
  border-radius: 10px;
  border-color: #bbbbbb;
  height: 80px;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: #eeeeee;
`;
const Input = styled.TextInput`
  width: 350px;
  padding: 12.5px 20px;
  border: 1px solid grey;
  background-color: white;
  border-radius: 10px;
  margin-bottom: 10px;
  font-weight: 500;
`;

export default ({ route }) => {
  console.log(route);
  let data = [0, 1, 2, 3, 4];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeStyle = { backgroundColor: "gray" };
  const buttonStyle = {
    title: { color: "black" },
    button: { borderColor: "#BBBBBB" },
  };
  const dateTime = (plusDate) => {
    let dt = new Date();
    const Plusdate = dt.getDate() + plusDate;
    dt.setDate(Plusdate);
    return `${dt.getMonth() + 1}.${dt.getDate()}`;
  };
  return (
    <ScrollView>
      <BgContainer>
        <Text h3>챌린지를 만들어주세요!</Text>
        <Text h4>챌린지 제목</Text>
        <Input />
        <FrequencyContainer>
          <Text h4>인증 빈도</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {data.map((item, idx) => (
              <Button
                title="버튼입니다."
                type="outline"
                titleStyle={buttonStyle.title}
                containerStyle={{
                  width: 100,
                  marginHorizontal: 5,
                  marginVertical: 5,
                  borderRadius: 10,
                  borderWidth: 0.05,
                }}
                buttonStyle={
                  idx === selectedIndex ? activeStyle : buttonStyle.button
                }
                onPress={() => setSelectedIndex(idx)}
                activeOpacity={0.9}
              />
            ))}
          </ScrollView>
        </FrequencyContainer>
        <DurationContainer>
          <Text h4>챌린지 기간</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {data.map((item, idx) => (
              <Button
                title="버튼입니다."
                type="outline"
                titleStyle={buttonStyle.title}
                containerStyle={{
                  width: 100,
                  marginHorizontal: 5,
                  marginVertical: 5,
                  borderRadius: 10,
                  borderWidth: 0.05,
                }}
                buttonStyle={
                  idx === selectedIndex ? activeStyle : buttonStyle.button
                }
                onPress={() => setSelectedIndex(idx)}
                activeOpacity={0.9}
              />
            ))}
          </ScrollView>
        </DurationContainer>
        <Text h4>인증 가능 시간</Text>
        <CertificationTimeContainer>
          <TimeButton beginEnd="begin" />
          <Divider orientation="vertical" width={1} style={{ width: 1 }} />
          <TimeButton beginEnd="end" />
        </CertificationTimeContainer>
        <Text h4>시작일</Text>
        <BeginDayContainer>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {data.map((item, idx) => (
              <Button
                title={<Text>{dateTime(idx)}</Text>}
                type="outline"
                titleStyle={buttonStyle.title}
                containerStyle={{
                  width: 100,
                  marginHorizontal: 5,
                  marginVertical: 5,
                  borderRadius: 10,
                  borderWidth: 0.05,
                }}
                buttonStyle={
                  idx === selectedIndex ? activeStyle : buttonStyle.button
                }
                onPress={() => setSelectedIndex(idx)}
                activeOpacity={0.9}
              />
            ))}
          </ScrollView>
        </BeginDayContainer>
        <Text h4>인증 방법</Text>
        <Input
          multiline={true}
          numberOfLines={10}
          placeholder="INPUT WITH ERROR MESSAGE"
          maxLength={500}
          style={{ height: 200, textAlignVertical: "top" }}
        />
        <Text h4>인증샷 예시</Text>
        <ImagePicker />
        <Text h4>챌린지 소개</Text>
        <Input
          multiline={true}
          numberOfLines={10}
          placeholder="INPUT WITH ERROR MESSAGE"
          maxLength={500}
          style={{ height: 200, textAlignVertical: "top" }}
        />
      </BgContainer>
    </ScrollView>
  );
};
