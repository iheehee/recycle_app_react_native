/* import React from "react";
import { View, ActivityIndicator, Dimensions } from "react-native";

export default ({ ss }) => {
  const { width, height } = Dimensions.get("screen");
  return (
    <View
      style={{
        backgroundColor: "black",
        width: width,
        height: 500,
        position: "absolute",
        bottom: -20,
        opacity: 0.2,
        zIndex: 1,
        alignItems: "center",
      }}
    >
      <ActivityIndicator />
    </View>
  );
}; */

import React from "react";
import { Dialog, CheckBox, ListItem, Avatar } from "@rneui/themed";
import { View } from "react-native";

const Dialogs = ({}) => {
  return (
    <View>
      <Dialog loadingStyle={{ color: "grey" }}>
        <Dialog.Loading loadingProps={{ size: "large", color: "grey" }} />
      </Dialog>
    </View>
  );
};

export default Dialogs;
