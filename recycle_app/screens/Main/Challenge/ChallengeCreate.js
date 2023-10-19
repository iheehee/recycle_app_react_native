import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import styled from "styled-components/native";
import { Text, Button, ButtonGroup } from "@rneui/themed";
import TimeButton from "../../../components/ChallengeCreate/TimeButton";

const BgContainer = styled.View`
  width: 100%;
  flex: 1;
  background-color: white;
`;
const FrequencyContainer = styled.View``;
const DurationContainer = styled.View``;
const Input = styled.TextInput`
  width: 350px;
  padding: 12.5px 20px;
  border: 1px solid grey;
  background-color: white;
  border-radius: 30px;
  margin-bottom: 10px;
  font-weight: 500;
`;

export default () => {
  let data = [0, 1, 2, 3, 4];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeStyle = { backgroundColor: "gray" };
  const buttonStyle = {
    title: { color: "black" },
    button: { borderColor: "#BBBBBB" },
  };

  return (
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
      <TimeButton />
    </BgContainer>
  );
};
