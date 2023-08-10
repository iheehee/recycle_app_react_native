import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default ({ title, onPress, icon, color }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={styles.button}
        activeOpacity={0.2}
      >
        <Entypo name={icon} size={28} color={"white"} />
        <Text style={styles.text}>{title}</Text>
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
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
    marginLeft: 9,
  },
});
