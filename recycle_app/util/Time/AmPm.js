import React, { useState, useEffect } from "react";
import { Text } from "react-native";

const AmPm = ({ DateTime, size }) => {
  const [AmPm, setAmPm] = useState("");
  const time = new Date(DateTime);
  const hours = time.getHours();

  if (hours > 12) {
    useEffect(() => {
      setAmPm("오후");
    }, []);
  } else {
    useEffect(() => {
      setAmPm("오전");
    }, []);
  }

  return (
    <>
      <Text style={{ fontSize: size }}>{AmPm}</Text>
    </>
  );
};

export default AmPm;
