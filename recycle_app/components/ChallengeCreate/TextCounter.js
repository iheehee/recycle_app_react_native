import { useState } from "react";
import { Text } from "@rneui/themed";
import { View } from "react-native";

export default ({ text, maxCount }) => {
  const countText = () => text?.length + "/" + maxCount;
  const countTextStyle = {
    color: "grey",
    alignItems: "flex-end",
    container: {
      alignItems: "flex-end",
      marginRight: 6,
      marginTop: -16,
    },
  };
  return (
    <View style={countTextStyle.container}>
      <Text style={countTextStyle}>{countText()}</Text>
    </View>
  );
};
