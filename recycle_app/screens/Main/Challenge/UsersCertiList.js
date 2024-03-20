import React, { useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Image } from "@rneui/themed";
import { useDispatch, useSelector } from "react-redux";
import { getUsersCertifications } from "../../../modules/certificationSlice";
import Ip from "../../../util/Ip";
import { useNavigation } from "@react-navigation/native";

const ImageAPI = ({ challengeId }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersCertifications(challengeId));
  }, []);
  const certifications = useSelector(
    (state) => state.certificationReducer.usersCertifications
  );
  const baseUrl = Ip.localIp;
  const navigation = useNavigation();
  console.log(certifications);
  return (
    <>
      <SafeAreaView>
        <FlatList
          data={certifications}
          style={styles.list}
          numColumns={2}
          keyExtractor={(item) => item.certification_id}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() =>
                navigation.navigate("Feed", {
                  photo: item.certification_photo,
                  comment: item.certification_comment,
                  nickname: item.participant_id.nickname_id,
                  avatar: item.participant_id.avatar,
                  certification_date: item.certification_date,
                })
              }
              style={styles.item}
            >
              <Image
                source={{ uri: baseUrl + item.certification_photo }}
                containerStyle={styles.item}
                style={{}}
                PlaceholderContent={
                  <View style={{ flexDirection: "row", height: "100%" }}>
                    <ActivityIndicator />
                  </View>
                }
              />
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: "white",
  },
  item: {
    aspectRatio: 1,
    height: "100%",
    width: "100%",
    flex: 1,
  },
});

export default ImageAPI;
