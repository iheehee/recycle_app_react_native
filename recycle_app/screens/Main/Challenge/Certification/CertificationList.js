import React from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");

const BgContainer = styled.View`
  flex: 1;
`;
const IconContainer = styled.View``;
const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
`;

const Certification = ({ route }) => {
  const navigation = useNavigation();
  const { myCertifications } = route.params;
  const CountDownScreen = () => navigation.navigate("CountDown");

  return (
    <BgContainer>
      {/* <SafeAreaView> */}
      <FlatList
        data={[...new Array(1)].map((_, i) => Number(i + 1))}
        style={styles.list}
        numColumns={3}
        keyExtractor={(e) => e}
        renderItem={({ item }) =>
          myCertifications.forEach((certification) => {
            console.log(certification.certification_id, item);

            certification.certification_id === item ? (
              <TouchableOpacity
                style={styles.item}
                onPress={() => CountDownScreen()}
              >
                <Container>
                  <Text>{item}</Text>
                  <IconContainer>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "flex-end",
                        height: width / 3.25,
                      }}
                    >
                      <FontAwesome name="camera" size={20} color="white" />
                    </View>
                  </IconContainer>
                </Container>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.item}
                onPress={() => CountDownScreen()}
              >
                <Container>
                  <Text>{item}</Text>
                  <IconContainer>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "flex-end",
                        height: width / 3.25,
                      }}
                    >
                      <FontAwesome name="camera" size={20} color="white" />
                    </View>
                  </IconContainer>
                </Container>
              </TouchableOpacity>
            );
          })
        }
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
    width: width / 3.03,
  },
});

export default Certification;
