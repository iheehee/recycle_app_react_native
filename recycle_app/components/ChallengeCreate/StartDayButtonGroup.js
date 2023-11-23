import { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { Button } from "@rneui/themed";
import { useDispatch } from "react-redux";
import { createChallenge } from "../../modules/createChallengeSlice";

export default ({ fontSize }) => {
  const buttonStyle = {
    activeTitle: { color: "white", fontSize: fontSize },
    nonActiveTitle: { color: "black", fontSize: fontSize },
    activeStyle: { backgroundColor: "black" },
    nonActiveButton: { borderColor: "#BBBBBB" },
  };

  const dateGroup = [];
  const rawDateGroup = [];
  const dateSet = (plusDay) => {
    let dt = new Date();
    const increase = dt.getDate() + plusDay;
    dt.setDate(increase);
    return `${dt.getMonth() + 1}.${dt.getDate()}`;
  };
  const rawDateSet = (plusDay) => {
    let dt = new Date();
    const increase = dt.getDate() + plusDay;
    dt.setDate(increase);
    return `${dt.getFullYear()}-${dt.getMonth() + 1}-${dt.getDate()}`;
  };
  //초기 값 세팅
  for (let i = 0; i < 7; i++) {
    dateGroup.push(dateSet(i));
    rawDateGroup.push(rawDateSet(i));
  }

  const [startDay, setStartDay] = useState(rawDateGroup[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createChallenge({ start_day: startDay }));
  }, [startDay]);

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {dateGroup.map((date, idx) => (
        <Button
          key={date}
          title={date}
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
            setStartDay(rawDateGroup[idx]);
          }}
          activeOpacity={0.9}
        />
      ))}
    </ScrollView>
  );
};
