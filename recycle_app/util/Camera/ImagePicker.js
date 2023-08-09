import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

export default () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);

  return (
    <View>
      <Camera>
        <Text>hello</Text>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroudColor: "#fff",
  },
});
