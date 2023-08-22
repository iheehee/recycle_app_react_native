import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useSelector } from "react-redux";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import Button from "./component/Button";
import axios from "axios";

export default ({ route }) => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);
  console.log(route);
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
        alert("Picture save!");
        const formData = new FormData();
        formData.append("file", {
          name: `${route.params.id}.jpeg`,
          type: "image/jpeg",
          uri: image,
        });
        axios({
          method: "post",
          url: "http://192.168.0.55:8080/challenges/1/certification/",
          data: formData,
          headers: {
            Authorization: jwt,
            "Content-Type": "multipart/form-data",
          },
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
