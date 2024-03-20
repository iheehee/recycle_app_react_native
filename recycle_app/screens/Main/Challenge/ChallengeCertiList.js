import React from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Image } from "@rneui/themed";

const BASE_URI = "https://source.unsplash.com/random?sig=";

const ImageAPI = () => {
  return (
    <>
      <SafeAreaView>
        <FlatList
          data={[...new Array(10)].map((_, i) => i.toString())}
          style={styles.list}
          numColumns={3}
          keyExtractor={(e) => e}
          renderItem={({ item }) => (
            <Image
              source={{ uri: BASE_URI + item }}
              containerStyle={styles.item}
              PlaceholderContent={<ActivityIndicator />}
            />
          )}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    width: "100%",
  },
  item: {
    aspectRatio: 1,
    width: "100%",
    flex: 0.33333,
  },
});

export default ImageAPI;
