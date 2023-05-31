import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { Text } from "react-native";
import Btn from "../../components/ChallengeDetail/Btn";

const Container = styled.View`
  flex: 1;
`;
const ObjectContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 5px 0px;
`;
const DurationContainer = styled.View`
  width: 100%;
  padding: 3px;
`;
const PeriodContainer = styled.View`
  padding: 5px 0 0 20px;
  align-items: start;
  width: 51%;
`;
const BtnContainer = styled.View`
  margin-top: 3px;
  align-content: center;
`;
const fontSize = 14;

const Day = ({ start_day, duration, frequency }) => {
  const [period, setPeriod] = useState("");
  const challengePeriod = (start_day, duration) => {
    let dt = new Date(start_day);
    const dayOfTheWeek = {
      1: "월",
      0: "일",
    };
    const durationDay = {
      "1주 동안": 7,
      "2주 동안": 14,
    };
    const startDay = () =>
      `${dt.getMonth()}.${dt.getDate()}(${dayOfTheWeek[dt.getDay()]})`;
    const endDay = () => {
      dt.setDate(dt.getMonth() + durationDay[duration]);
      return startDay();
    };
    return setPeriod(startDay() + "-" + endDay());
  };
  useEffect(() => {
    challengePeriod(start_day, duration);
  }, []);
  return (
    <Container>
      <ObjectContainer>
        <PeriodContainer>
          <Text style={{ fontSize: fontSize }}>{period}</Text>
          <DurationContainer>
            <Text style={{ fontSize: fontSize }}>
              {duration + ", " + frequency}
            </Text>
          </DurationContainer>
        </PeriodContainer>
        <BtnContainer>
          <Btn text={"오늘부터 시작"} />
        </BtnContainer>
      </ObjectContainer>
    </Container>
  );
};

export default Day;
