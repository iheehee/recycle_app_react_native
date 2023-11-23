import { useState, useEffect } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { createChallenge } from "../../modules/createChallengeSlice";

export default ({ fontSize }) => {
  const buttonStyle = {
    activeTitle: { color: "white", fontSize: fontSize },
    nonActiveTitle: { color: "black", fontSize: fontSize },
    activeStyle: { backgroundColor: "black" },
    nonActiveButton: { borderColor: "#BBBBBB" },
  };

  let durationGroup = ["1주 동안", "2주 동안", "3주 동안", "4주 동안"];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [duration, setDuration] = useState(durationGroup[0]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(createChallenge({ duration: duration }));
  }, [duration]);

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {durationGroup.map((value, idx) => (
        <Button
          key={"duration_" + idx}
          title={value}
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
            borderWidth: 0.05,
          }}
          buttonStyle={
            idx === selectedIndex
              ? buttonStyle.activeStyle
              : buttonStyle.nonActiveButton
          }
          onPress={() => {
            setSelectedIndex(idx);
            setDuration(durationGroup[idx]);
          }}
          activeOpacity={0.9}
        />
      ))}
    </ScrollView>
  );
};
