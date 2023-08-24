import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image, Alert } from "react-native";
import { useSelector } from "react-redux";
import { Camera, CameraType } from "expo-camera";
import { useNavigation } from "@react-navigation/native";
import * as MediaLibrary from "expo-media-library";
import Button from "./component/Button";
import axios from "axios";
import ChallengeCertiDetail from "../../screens/Main/Challenge/Certification/ChallengeCertiDetail";

export default ({ route }) => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);
  const [certificationImage, setCertificationImage] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);

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
  const saveImage = async () => {
    if (image) {
      try {
        MediaLibrary.createAssetAsync(image);
        const formData = new FormData();
        formData.append("file", {
          name: `${route.params.id}.jpeg`,
          type: "image/jpeg",
          uri: image,
        });
        await axios({
          method: "post",
          url: "http://192.168.0.55:8080/challenges/1/certification/",
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
                axios({
                  method: "get",
                  url: "http://192.168.0.55:8080/challenges/1/certification/",
                  headers: {
                    Authorization: jwt,
                  },
                }).then((response) => {
                  const data = response.data;
                  return setCertificationImage([data]);
                });
                navigation.navigate("ChallengeCerti", {
                  screen: "ChallengeCertiStatus",
                  params: { certiImage: certificationImage },
                });
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
              color={flash === Camera.Constants.FlashMode.off ? "grey" : false}
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
