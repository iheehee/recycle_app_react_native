import { useState } from "react";
import { TouchableOpacity, Alert, View, StyleSheet } from "react-native";
import { Text, Button, ButtonGroup } from "@rneui/themed";
import ImagePicker from "../../util/Camera/ImagePicker";

export default () => {
  const styles = StyleSheet.create({
    subHeader: {
      backgroundColor: "gray",
      color: "white",
      textAlign: "center",
      paddingVertical: 5,
      marginBottom: 10,
      width: 200,
    },
  });
  return (
    <>
      <View style={{ height: 230, width: 200, alignItems: "center" }}>
        <View
          style={{
            borderColor: "gray",
            borderWidth: 0.5,
            height: 200,
            width: 200,
          }}
        >
          <ImagePicker />
        </View>
        <Text style={styles.subHeader}>인증 성공</Text>
        {/* <Tile
              imageSrc={{
                uri: "https://www.mediastorehouse.com/p/191/sunset-porthmeor-beach-st-ives-cornwall-11702500.jpg.webp",
              }}
              titleStyle={{ fontSize: 15 }}
              featured
              activeOpacity={1}
              width={200}
            /> */}
      </View>
    </>
  );
};
