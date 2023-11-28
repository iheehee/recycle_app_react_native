import React from "react";
import { Dialog } from "@rneui/themed";
import { View } from "react-native";

const Dialogs = ({}) => {
  return (
    <View>
      <Dialog
        overlayStyle={{ backgroundColor: "transparent", alignItems: "center" }}
      >
        <Dialog.Loading loadingProps={{ size: "large", color: "white" }} />
      </Dialog>
    </View>
  );
};

export default Dialogs;
