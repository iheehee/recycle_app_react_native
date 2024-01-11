import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import Modal from "react-native-modal";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from "@rneui/themed";

const { width, height } = Dimensions.get("screen");

export default () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const list = [
    {
      title: "편집",
      onPress: () => console.log("하이"),
    },
    {
      title: "취소",
      onPress: () => hideModal(),
    },
  ];

  return (
    <View>
      <TouchableOpacity onPress={() => showModal()}>
        <MaterialCommunityIcons name="dots-vertical" size={24} color="black" />
      </TouchableOpacity>
      <Modal
        style={styles.modal}
        isVisible={visible}
        onBackdropPress={() => hideModal()}
        animationInTiming={500}
        animationOutTiming={500}
        backdropTransitionInTiming={500}
        backdropTransitionOutTiming={500}
      >
        {/* place your buttons here */}
        {list.map((item, num) => (
          <Button
            title={item.title}
            loading={false}
            loadingProps={{ size: "small", color: "white" }}
            buttonStyle={{
              backgroundColor: "white",
              borderRadius: 10,
              height: 50,
            }}
            titleStyle={{ color: "black", fontSize: 18 }}
            containerStyle={{
              marginHorizontal: 10,
              marginVertical: 3,
            }}
            onPress={item.onPress}
          />
        ))}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    backgroundColor: "#00ff0000",
    height: 200,
    flex: 0,
    bottom: 0,
    position: "absolute",
    width: "100%",
  },
});
