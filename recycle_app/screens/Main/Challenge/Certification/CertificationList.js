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

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";

import Ip from "../../../../util/Ip";
import utils from "../../../../utils";

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
const TimeStampContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
  padding: 4px;
`;
const DateContainer = styled.View``;
const TimeContainer = styled.View`
  justify-content: flex-end;
`;
const DateText = styled.Text`
  font-size: ${(props) => props.size}px;
  font-family: ${(props) => props.font};
  color: white;
  margin-top: -3px;
`;
/* const dateTime = (dateTime) => {
  let time = new Date(dateTime);
  return time.getFullYear();
};
 */
const Certification = ({ route, myCertifications }) => {
  SplashScreen.preventAutoHideAsync();
  const maxArray = [...new Array(100)].map((_, i) => i + 1);
  const DATA = [];
  const [e, setE] = useState([]);

  const { challenge_id } = route.params;

  const targetChallenge = myCertifications.find(
    (challenge) => challenge.challenge_id === challenge_id
  );
  let [loaded, error] = useFonts({
    JockeyOne: require("../../../../assets/font/Oswald-Regular.ttf"),
    Lobster: require("../../../../assets/font/Lobster-Regular.ttf"),
  });
  console.log(loaded, error);

  useEffect(() => {
    if (targetChallenge) {
      maxArray.forEach((num) => {
        const exist = targetChallenge.certifications.find(
          (certification) => certification.certification_num === num
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

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  const navigation = useNavigation();
  const CountDownScreen = (certification_num) =>
    navigation.navigate("CountDown", {
      certification_num: certification_num,
      challenge_id: challenge_id,
    });
  const CertificationDetailScreen = (certification_data) =>
    navigation.navigate("CertificationDetailScreen", {
      certification_data,
    });

  console.log(e);

  if (!loaded && !error) {
    return null;
  }

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
                item.certification_num
                  ? CertificationDetailScreen(item)
                  : CountDownScreen(item)
              }
            >
              <Container>
                {item.certification_num ? (
                  <Text style={{ color: "white" }}>
                    {/*   {item.certification_num} */}
                  </Text>
                ) : (
                  <Text>{item}</Text>
                )}

                {item.certification_num ? (
                  //certification_local_photo_url가 ""(빈 string) 이 아니라면 이미지를 표시한다.
                  item.certification_photo !== null ? (
                    <>
                      <Image
                        source={{ uri: Ip.localIp + item.certification_photo }}
                        style={{
                          zIndex: -1,
                          position: "absolute",
                          width: width / 3.03,
                          height: height / 6.6,
                        }}
                      />
                      <TimeStampContainer>
                        <DateContainer>
                          <DateText size="12" font="JockeyOne">
                            {utils.dateTime("year", item.certification_date)}
                          </DateText>
                          <DateText size="17" font="JockeyOne">
                            {utils.dateTime("month", item.certification_date)}
                          </DateText>
                          <DateText size="44" font="Lobster">
                            {utils.dateTime("day", item.certification_date)}
                          </DateText>
                        </DateContainer>
                        <TimeContainer>
                          <DateText size="13" font="JockeyOne">
                            {utils.dateTime("time", item.certification_date)}
                          </DateText>
                        </TimeContainer>
                      </TimeStampContainer>
                    </>
                  ) : (
                    <>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <FontAwesome name="check" size={24} color="orange" />
                      </View>
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
                    </>
                  )
                ) : (
                  <IconContainer>
                    {/* 카메라 아이콘 */}
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
                )}
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
    height: height / 6.6,
  },
});

export default Certification;
