import React, { useState } from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { TimerPickerModal } from "react-native-timer-picker";

export default ({}) => {
  const { width, height } = Dimensions.get("screen");
  const [showPicker, setShowPicker] = useState(false);
  const [timeValue, setTimeValue] = useState(null);
  const timePresenter = ({ hours, minutes, seconds }) => {
    const tt = [dd, dd, dd];
    console.log();
    /* if (hours) {

    } */

    return hours;
  };
  const formatTime = ({ hours, minutes, seconds }) => {
    const timeParts = [];

    if (hours !== undefined) {
      timeParts.push(hours.toString().padStart(2, "0"));
    }
    if (minutes !== undefined) {
      timeParts.push(minutes.toString().padStart(2, "0"));
    }
    if (seconds !== undefined) {
      timeParts.push(seconds.toString().padStart(2, "0"));
    }
    return timeParts.join(":");
  };

  return (
    <View
      style={{
        borderWidth: 0.5,
        width: width * 0.94,
        height: height * 0.05,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        alignItems: "center",
      }}
    >
      <View>
        <Text>지속시간</Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => setShowPicker(true)}
        style={{
          width: width * 0.35,
          height: height * 0.04,
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 16,
              color: "black",
            }}
          >
            {timeValue}분
          </Text>
        </View>
      </TouchableOpacity>

      <TimerPickerModal
        visible={showPicker}
        setIsVisible={setShowPicker}
        onConfirm={(pickedDuration) => {
          setShowPicker(false);
        }}
        modalTitle="루틴 지속시간"
        onCancel={() => setShowPicker(false)}
        closeOnOverlayPress
        styles={{
          theme: "dark",
        }}
        modalProps={{
          overlayOpacity: 0.2,
        }}
      />
    </View>
  );
};
