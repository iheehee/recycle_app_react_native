import React from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { Image } from "@rneui/themed";

const BgContainer = styled.View`
  align-items: center;
  justify-content: space-between;
`;

const Certification = () => {
  const navigation = useNavigation();
  const CountDownScreen = () => navigation.navigate("CountDown");
  return (
    <BgContainer>
      {/* <SafeAreaView> */}
      <FlatList
        data={[...new Array(5)].map((_, i) => i.toString())}
        style={styles.list}
        numColumns={3}
        keyExtractor={(e) => e}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => CountDownScreen()}
          >
            <View>
              <Text>{item}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </BgContainer>
  );
};
{
  /* <Image
              source={{ uri: BASE_URI + item }}
              containerStyle={styles.item}
              PlaceholderContent={<ActivityIndicator />}
            /> */
}
const styles = StyleSheet.create({
  list: {
    width: "100%",
  },
  item: {
    backgroundColor: "grey",
    aspectRatio: 1,
    marginLeft: 1,
    width: "33%",
  },
});

export default Certification;
