import React, { useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  View,
  Dimensions,
} from "react-native";
import { Image } from "@rneui/themed";
import { useDispatch, useSelector } from "react-redux";
import { getUsersCertifications } from "../../../modules/certificationSlice";
import Ip from "../../../util/Ip";

const { width, height } = Dimensions.get("screen");
const ImageAPI = ({ challengeId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersCertifications(challengeId));
  }, []);
  const certifications = useSelector(
    (state) => state.certificationReducer.usersCertifications
  );
  const baseUrl = Ip.localIp;
  return (
    <>
      <SafeAreaView>
        <FlatList
          data={certifications}
          style={styles.list}
          numColumns={2}
          keyExtractor={(item) => item.certification_id}
          renderItem={({ item }) => (
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
