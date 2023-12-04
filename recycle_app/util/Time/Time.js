import React, { useEffect, useState } from "react";
import { Text } from "react-native";

const Time = ({ DateTime, size }) => {
  const dt = new Date(DateTime);
  const initHour = dt.getHours();
  const [hour, setHour] = useState(initHour);
  if (initHour > 12) {
    let calculatedData;
    if ((initHour - 12).length === 2) {
      calculatedData = initHour - 12;
    } else {
      calculatedData = "0" + (initHour - 12);
    }
    useEffect(() => {
      setHour(calculatedData);
    }, []);
  }
  const presentTime = `${hour}:${dt.getMinutes()}:${dt.getSeconds()}`;
  return (
    <>
      <Text style={{ fontSize: size }}>{presentTime}</Text>
    </>
  );
};

export default Time;
