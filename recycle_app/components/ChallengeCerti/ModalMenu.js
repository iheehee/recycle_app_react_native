import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Modal from "react-native-modal";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  showModal = () => this.setState({ visible: true });

  hideModal = () => this.setState({ visible: false });

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.showModal}>
          <MaterialCommunityIcons
            name="dots-vertical"
            size={24}
            color="black"
          />
        </TouchableOpacity>
        <Modal
          style={styles.modal}
          isVisible={this.state.visible}
          onBackdropPress={this.hideModal}
        >
          <ScrollView horizontal={true}>
            {/* place your buttons here */}
            <Text> Very Very Long String </Text>
          </ScrollView>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    backgroundColor: "white",
    height: 200,
    flex: 0,
    bottom: 0,
    position: "absolute",
    width: "100%",
  },
});
