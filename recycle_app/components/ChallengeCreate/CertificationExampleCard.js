import { useEffect, useRef, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "@rneui/themed";
import { useSelector } from "react-redux";
import ImagePicker from "../../util/Camera/ImagePicker";

export default ({ title, type }) => {
  useEffect(() => {
    type === "success" ? setContainerColor("green") : "gray";
    type === "fail" ? setContainerColor("red") : null;
  }, [type]);
  const [containerColor, setContainerColor] = useState("gray");
  const examplePhoto = useSelector(
    (state) => state.createChallengeReducer.newChallenge
  );

  return (
    <>
      <ImagePicker title={title} type={type} />
    </>
  );
};
const styles = StyleSheet.create({
  subHeader: {
    color: "white",
    marginTop: 6,
  },
});
