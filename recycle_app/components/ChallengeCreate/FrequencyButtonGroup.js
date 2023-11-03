import { useState, useEffect } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Button } from "@rneui/themed";
import { useDispatch } from "react-redux";
import { createChallenge } from "../../modules/createChallengeSlice";

export default ({ fontSize }) => {
  const styles = StyleSheet.create({
    button: {
      color: "white",
      marginTop: 6,
    },
  });
  const dispatch = useDispatch();
  const data = [
    "주 1일",
    "주 2일",
    "주 3일",
    "주 4일",
    "주 5일",
    "주 6일",
    "주 7일",
    "평일 매일",
    "주말 매일",
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [text, setText] = useState("주 1일");

  const buttonStyle = {
    activeTitle: { color: "white", fontSize: fontSize },
    nonActiveTitle: { color: "black", fontSize: fontSize },
    activeStyle: { backgroundColor: "black" },
    nonActiveButton: { borderColor: "#BBBBBB" },
  };
  useEffect(() => {
    dispatch(createChallenge({ frequency: text }));
  }, [text]);
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {data.map((item, idx) => (
        <Button
          key={"frequency_" + idx}
          title={item}
          type="outline"
          titleStyle={
            idx === selectedIndex
              ? buttonStyle.activeTitle
              : buttonStyle.nonActiveTitle
          }
          containerStyle={{
            width: 100,
            marginHorizontal: 5,
            marginVertical: 5,
            borderRadius: 18,
            borderWidth: 0.2,
          }}
          buttonStyle={
            idx === selectedIndex
              ? buttonStyle.activeStyle
              : buttonStyle.nonActiveButton
          }
          onPress={() => {
            setSelectedIndex(idx);
            setText(item);
          }}
          activeOpacity={0.9}
        />
      ))}
    </ScrollView>
  );
};
