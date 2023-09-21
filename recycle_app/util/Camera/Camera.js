import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Camera, CameraType } from "expo-camera";
import { useNavigation } from "@react-navigation/native";
import * as MediaLibrary from "expo-media-library";
import Button from "./component/Button";
import axios from "axios";
import { getMyCertifications } from "../../modules/certificationSlice";

export default ({ route }) => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
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
  //const localIp = "192.168.35.94:8080";
  const localIp = "192.168.0.55:8080";
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
        await axios({
          method: "post",
          url: `http://${localIp}/challenges/${id}/certification/`,
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
                  type === CameraType.back ? CameraType.front : CameraType.back
                );
              }}
            />
            <Button
              icon={"flash"}
              color={flash === Camera.Constants.FlashMode.off ? "gray" : false}
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
