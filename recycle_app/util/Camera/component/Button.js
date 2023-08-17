import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default ({ title, onPress, icon, color }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={title ? styles.button : styles.topbutton}
        activeOpacity={0.2}
      >
        <Entypo name={icon} size={28} color={color ? color : "white"} />
        {title ? <Text style={styles.text}>{title}</Text> : null}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 40,
    marginBottom: 50,
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
  },
  topbutton: {
    paddingHorizontal: 7,
    height: 43,
    borderRadius: 30,
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
    opacity: 0.5,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
    marginLeft: 9,
  },
});
