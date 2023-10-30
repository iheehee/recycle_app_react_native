import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "@rneui/themed";
import ImagePicker from "../../util/Camera/ImagePicker";

export default ({ title }) => {
  const styles = StyleSheet.create({
    subHeader: {
      color: "white",
      marginTop: 6,
    },
  });
  return (
    <>
      <View
        style={{
          height: 230,
          width: 200,
          alignItems: "center",
          marginRight: 20,
        }}
      >
        <View
          style={{
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            backgroundColor: "#EAECEE",
            height: 200,
            width: 200,
          }}
        >
          <ImagePicker title={title} />
        </View>
        <View
          style={{
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            width: 200,
            height: 30,
            backgroundColor: "gray",

            alignItems: "center",
          }}
        >
          <Text style={styles.subHeader}>{title}</Text>
        </View>
      </View>
    </>
  );
};
