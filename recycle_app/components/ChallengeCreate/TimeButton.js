import React, { useState } from "react";
import { Pressable, StyleSheet, View, SafeAreaView } from "react-native";
import { Text, Button, ButtonGroup } from "@rneui/themed";
import styled from "styled-components/native";

import DateTimePickerModal from "react-native-modal-datetime-picker";

export default () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const Container = styled.View`
    margin: 10px;
    border: 0.2px;
    border-color: gray;
    height: 30px;
  `;
  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Container>
      {/* <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <Button title="Show Date Picker" onPress={showDatePicker} /> */}
    </Container>
  );
};
