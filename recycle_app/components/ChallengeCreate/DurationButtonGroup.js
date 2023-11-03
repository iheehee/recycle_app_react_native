import { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

export default ({ fontSize }) => {
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    button: {
      color: "white",
      marginTop: 6,
    },
  });
  let data = ["1주 동안", "2주 동안", "3주 동안", "4주 동안"];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const buttonStyle = {
    activeTitle: { color: "white", fontSize: fontSize },
    nonActiveTitle: { color: "black", fontSize: fontSize },
    activeStyle: { backgroundColor: "black" },
    nonActiveButton: { borderColor: "#BBBBBB" },
  };
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {data.map((item, idx) => (
        <Button
          key={"duration_" + idx}
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
            borderWidth: 0.05,
          }}
          buttonStyle={
            idx === selectedIndex
              ? buttonStyle.activeStyle
              : buttonStyle.nonActiveButton
          }
          onPress={() => {
            setSelectedIndex(idx);
            return navigation.setParams({ durationsData: data[selectedIndex] });
          }}
          activeOpacity={0.9}
        />
      ))}
    </ScrollView>
  );
};
