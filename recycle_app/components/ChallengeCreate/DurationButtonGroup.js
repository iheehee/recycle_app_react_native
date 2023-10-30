import { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

export default ({}) => {
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    button: {
      color: "white",
      marginTop: 6,
    },
  });
  let data = ["1주 동안", "2주 동안", "3주 동안", "4주 동안"];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeStyle = { backgroundColor: "gray" };
  const buttonStyle = {
    title: { color: "black" },
    button: { borderColor: "#BBBBBB" },
  };
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {data.map((item, idx) => (
        <Button
          title={item}
          type="outline"
          titleStyle={buttonStyle.title}
          containerStyle={{
            width: 100,
            marginHorizontal: 5,
            marginVertical: 5,
            borderRadius: 10,
            borderWidth: 0.05,
          }}
          buttonStyle={idx === selectedIndex ? activeStyle : buttonStyle.button}
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
