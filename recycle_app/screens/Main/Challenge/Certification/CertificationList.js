import React, { useState, useEffect } from "react";
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
import { useSelector } from "react-redux";

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

const Certification = ({ route, myCertifications }) => {
  const { challenge_id } = route.params;

  const targetChallenge = myCertifications.find(
    (challenge) => challenge.challenge_id === challenge_id
  );

  useEffect(() => {
    if (targetChallenge) {
      maxArray.forEach((num) => {
        const exist = targetChallenge.certifications.find(
          (certification) => certification.certification_id === num
        );
        if (exist) {
          DATA.push(exist);
        } else {
          DATA.push(num);
        }
      });
    }
    setE(DATA);
  }, [myCertifications]);

  const [e, setE] = useState([]);
  const navigation = useNavigation();
  const CountDownScreen = (certification_id) =>
    navigation.navigate("CountDown", {
      certificationId: certification_id,
      challengeId: challengeId,
    });
  const maxArray = [...new Array(100)].map((_, i) => i + 1);
  const DATA = [];
  console.log(e);
  return (
    <BgContainer>
      {/* <SafeAreaView> */}
      {myCertifications.length === 0 ? (
        <View
          style={{
            height: 500,
            justifyContent: "center",
          }}
        >
          <ActivityIndicator />
        </View>
      ) : (
        <FlatList
          data={e}
          style={styles.list}
          numColumns={3}
          keyExtractor={(contact, index) => String(index)}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() =>
                CountDownScreen(
                  item.certification_id ? item.certification_id : item
                )
              }
            >
              <Container>
                <Text>
                  {item.certification_id ? item.certification_id : item}
                </Text>
                {item.certification_id ? (
                  item.certification_image ? null : (
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <FontAwesome name="check" size={24} color="orange" />
                    </View>
                  )
                ) : null}
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
          )}
        />
      )}
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
