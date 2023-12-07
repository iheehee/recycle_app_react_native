import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const Container = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
`;
const TextContainer = styled.View``;
const DurationText = styled.Text`
  width: 100%;
  font-size: 16px;
`;
const PeriodContainer = styled.View`
  padding: 7px 0 0 20px;
  align-items: start;
  width: 100%;
`;
const DateText = styled.Text`
  flex-direction: row;
  align-items: center;
  width: 100%;
  font-size: 16px;
  margin: 2px 0px;
`;
const AvailableText = styled.Text`
  color: gray;
`;
const BtnContainer = styled.View`
  margin-top: 3px;
  align-content: center;
`;

const CertiDay = ({ start_day, duration, frequency }) => {
  const [period, setPeriod] = useState("");
  const challengePeriod = (start_day, duration) => {
    let dt = new Date(start_day);
    const dayOfTheWeek = {
      1: "월",
      2: "화",
      3: "수",
      4: "목",
      5: "금",
      6: "토",
      0: "일",
    };
    const durationDay = {
      "1주 동안": 7,
      "2주 동안": 14,
    };

    const startDay = () =>
      `${dt.getFullYear()}.${dt.getMonth()}.${dt.getDate()}(${
        dayOfTheWeek[dt.getDay()]
      })`;
    const endDay = () => {
      dt.setDate(dt.getMonth() + durationDay[duration]);
      return startDay();
    };
    return setPeriod(startDay() + " - " + endDay());
  };
  const time = "(00:00~23:59)";
  const availableDays = {
    "평일 매일": "월,화,수,목,금 ",
    "주말 매일": "토,일 ",
    "주 1-7일": "월,화,수,목,금,토,일 ",
  };
  useEffect(() => {
    challengePeriod(start_day, duration);
  }, [start_day, duration]);
  return (
    <Container>
      <FontAwesome5 name="calendar-check" size={24} color="black" />
      <TextContainer>
        <PeriodContainer>
          <DurationText>{duration + ", " + frequency}</DurationText>
          <DateText>{period}</DateText>
          <AvailableText>
            {"인증가능: "}
            {frequency === "평일 매일"
              ? availableDays[frequency] + time
              : frequency === "주말 매일"
              ? availableDays[frequency] + time
              : availableDays["주 1-7일"] + time}
          </AvailableText>
        </PeriodContainer>
      </TextContainer>
    </Container>
  );
};

export default CertiDay;
