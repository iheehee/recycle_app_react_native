import React from "react";
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
  width: 37%;
`;
const BtnContainer = styled.View`
  margin-top: 3px;
  align-content: center;
`;
const fontSize = 13;
let dt = new Date();
const startDay = (start_day) =>
  dt.getMonth(start_day) + "." + dt.getDate(start_day);

let challengePeriod = (start_day, duration) => {
  return startDay;
};

const Day = ({ start_day, duration, frequency }) => {
  return (
    <Container>
      <ObjectContainer>
        <PeriodContainer>
          <Text>{startDay(start_day)}</Text>
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
