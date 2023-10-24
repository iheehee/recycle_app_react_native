import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { Text, Button } from "@rneui/themed";
import styled from "styled-components/native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useNavigation } from "@react-navigation/native";

export default ({ beginEnd }) => {
  const navigation = useNavigation();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [Time, setTime] = useState(beginEnd === "begin" ? "00:00" : "23:59");
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const Container = styled.View``;
  const makeTime = (dt) => {
    const hour = String(dt.getHours()).padStart(2, "0");
    const minutes = String(dt.getMinutes()).padStart(2, "0");
    return setTime(`${hour}:${minutes}`);
  };

  const handleConfirm = (date) => {
    let dt = new Date(date);
    makeTime(dt);
    navigation.setParams(
      beginEnd === "begin" ? { beginTime: Time } : { endTime: Time }
    );

    return hideDatePicker();
  };

  return (
    <>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <Button
        containerStyle={{}}
        buttonStyle={{
          width: 200,
          height: 60,
          paddingLeft: 10,
          backgroundColor: null,
        }}
        titleStyle={{}}
        title={
          <View style={{ paddingLeft: 20, width: 200 }}>
            {beginEnd === "begin" ? (
              <Text>시작 시간</Text>
            ) : (
              <Text>종료 시간</Text>
            )}
            <Text>{Time}</Text>
          </View>
        }
        onPress={showDatePicker}
      />
    </>
  );
};
