/* import React from "react";
import { Text, TouchableWithoutFeedback } from "react-native";
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const PopUpMenu = () => (
  <TouchableWithoutFeedback onPress={() => null}>
    <MenuProvider
      style={{
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      <Menu onSelect={(value) => alert(`Selected number: ${value}`)}>
        <MenuTrigger>
          <MaterialCommunityIcons
            name="dots-vertical"
            size={24}
            color="black"
          />
        </MenuTrigger>
        <MenuOptions
          customStyles={{
            optionsWrapper: {
              backgroundColor: "yellow",
            },
          }}
        >
          <MenuOption value={1} text="One" />
          <MenuOption value={2}>
            <Text style={{ color: "red" }}>Two</Text>
          </MenuOption>
          <MenuOption value={3} disabled={true} text="Three" />
        </MenuOptions>
      </Menu>
    </MenuProvider>
  </TouchableWithoutFeedback>
);

export default PopUpMenu; */
import * as React from "react";
import { View } from "react-native";
import { Button, Menu, Divider, PaperProvider } from "react-native-paper";

const MyComponent = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <PaperProvider>
      <View
        style={{
          paddingTop: 50,
          flexDirection: "row",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>Show menu</Button>}
        >
          <Menu.Item onPress={() => {}} title="Item 1" />
          <Menu.Item onPress={() => {}} title="Item 2" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Item 3" />
        </Menu>
      </View>
    </PaperProvider>
  );
};

export default MyComponent;
