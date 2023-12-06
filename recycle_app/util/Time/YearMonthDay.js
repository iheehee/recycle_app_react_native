import React from "react";
import { View, Text } from "react-native";

const YearMonthDay = ({ type, DateTime, size }) => {
  const dt = new Date(DateTime);
  const YearMontDayPresent = `${dt.getFullYear()}.${dt.getMonth()}.${dt.getDate()}`;
  const MonthDayPresent = `${dt.getMonth()}.${dt.getDate()}`;
  return (
    <>
      <Text style={{ fontSize: size }}>
        {type === "YearMonthDay" ? YearMontDayPresent : MonthDayPresent}
      </Text>
    </>
  );
};

export default YearMonthDay;
