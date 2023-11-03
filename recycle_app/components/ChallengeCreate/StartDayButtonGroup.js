import { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { Button } from "@rneui/themed";
import { useDispatch } from "react-redux";
import { createChallenge } from "../../modules/createChallengeSlice";

export default ({ fontSize }) => {
  let dateGroup = [];
  const dateTime = (plusDay) => {
    let dt = new Date();
    const increasedDate = dt.getDate() + plusDay;
    dt.setDate(increasedDate);
    return `${dt.getMonth() + 1}.${dt.getDate()}`;
  };
  //초기 값 세팅
  for (let i = 0; i < 7; i++) {
    dateGroup.push(dateTime(i));
  }
  const [startDay, setStartDay] = useState(dateGroup[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const buttonStyle = {
    activeTitle: { color: "white", fontSize: fontSize },
    nonActiveTitle: { color: "black", fontSize: fontSize },
    activeStyle: { backgroundColor: "black" },
    nonActiveButton: { borderColor: "#BBBBBB" },
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createChallenge({ startDay: startDay }));
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
            setStartDay(date);
          }}
          activeOpacity={0.9}
        />
      ))}
    </ScrollView>
  );
};
