import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Image,
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Input, Text } from "@rneui/themed";
import { Camera, CameraType } from "expo-camera";
import { useNavigation } from "@react-navigation/native";
import * as MediaLibrary from "expo-media-library";
import Button from "./component/Button";
import axios from "axios";
import { getMyCertifications } from "../../modules/certificationSlice";
import Ip from "../Ip";
import TextCounter from "../../components/ChallengeCreate/TextCounter";

export default ({ route }) => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [comment, setComment] = useState("");
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);
  const { id } = route.params.challenge;

  const takePicture = async () => {
    if (cameraRef) {
      console.log(cameraRef.current);
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const jwt = useSelector((state) => state.usersReducer.token);
  const baseUrl = Ip.localIp;

  const saveImage = async () => {
    if (image) {
      try {
        MediaLibrary.createAssetAsync(image);
        const formData = new FormData();
        formData.append("file", {
          name: `${id}.jpeg`,
          type: "image/jpeg",
          uri: image,
        });
        const document = {
          comment: comment,
          challenge_id: id,
        };
        formData.append("document", JSON.stringify(document));
        await axios({
          method: "post",
          url: `${baseUrl}/challenges/${id}/certification/`,
          data: formData,
          headers: {
            Authorization: jwt,
            "Content-Type": "multipart/form-data",
          },
        }).then((response) => {
          const { result } = response.data;
          Alert.alert(result, "", [
            {
              text: "확인",
              onPress: () => {
                dispatch(getMyCertifications(jwt));
                navigation.navigate("CertificationDetail", {
                  screen: "ChallengeCertiDetail",
                  params: {
                    challenge: route.params.challenge,
                  },
                }); //카메라 인증 후 디테일 페이지로 이동
              },
            },
          ]);
        });

        setImage(null);
      } catch (e) {
        console.log(e);
      }
    }
  };

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={"padding"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          {!image ? (
            <Camera
              style={styles.camera}
              type={type}
              flashMode={flash}
              ref={cameraRef}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 30,
                }}
              >
                <Button
                  icon={"retweet"}
                  onPress={() => {
                    setType(
                      type === CameraType.back
                        ? CameraType.front
                        : CameraType.back
                    );
                  }}
                />
                <Button
                  icon={"flash"}
                  color={
                    flash === Camera.Constants.FlashMode.off ? "gray" : false
                  }
                  onPress={() => {
                    setFlash(
                      flash === Camera.Constants.FlashMode.off
                        ? Camera.Constants.FlashMode.torch
                        : Camera.Constants.FlashMode.off
                    );
                  }}
                />
              </View>
            </Camera>
          ) : (
            <Image source={{ uri: image }} style={styles.camera} />
          )}

          <View>
            {image ? (
              <View>
                <View style={{ marginBottom: 15 }}>
                  <Text h4 style={{ color: "white", margin: 9 }}>
                    Comment
                  </Text>
                  <Input
                    inputContainerStyle={{
                      borderColor: "white",
                      borderRadius: 12,
                      borderWidth: 0.5,
                      height: 100,
                      alignItems: "flex-start",
                    }}
                    multiline={true}
                    numberOfLines={3}
                    maxLength={100}
                    inputStyle={{ color: "white", margin: 9 }}
                    value={comment}
                    onChangeText={(comment) => setComment(comment)}
                  />
                  <TextCounter text={comment} maxCount={100} />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingHorizontal: 80,
                  }}
                >
                  <Button
                    title={"Re-take"}
                    icon={"retweet"}
                    onPress={() => setImage(null)}
                  />
                  <Button title={"Save"} icon={"check"} onPress={saveImage} />
                </View>
              </View>
            ) : (
              <View
                style={{
                  alignItems: "center",
                }}
              >
                <Button
                  title={"Take a picture"}
                  icon={"camera"}
                  onPress={takePicture}
                />
              </View>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroudColor: "#000",
    justifyContent: "center",
    paddingBottom: 0,
    backgroundColor: "black",
  },
  camera: {
    flex: 1,
  },
});
