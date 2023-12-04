import React from "react";
import { Text } from "react-native";

const YearMonthDay = ({ DateTime, size }) => {
  const dt = new Date(DateTime);
  const presentDate = `${dt.getFullYear()}.${dt.getMonth()}.${dt.getDate()}`;

  return (
    <>
      <Text style={{ fontSize: size }}>{presentDate}</Text>
    </>
  );
};

export default YearMonthDay;
