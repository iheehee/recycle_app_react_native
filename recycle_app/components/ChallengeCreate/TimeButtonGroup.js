import { useState } from "react";
import { TouchableOpacity, Alert } from "react-native";
import { Text, Button, ButtonGroup } from "@rneui/themed";

export default () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <ButtonGroup
        containerStyle={{
          borderRadius: 10,
          height: 70,
          alignItems: "center",
        }}
        buttonStyle={{ padding: 10 }}
        buttonContainerStyle={{ height: 50 }}
        selectedButtonStyle={{ backgroundColor: null }}
        buttons={[<Text>하이, </Text>, <Text>바이</Text>]}
        selectedIndex={selectedIndex}
        onPress={setSelectedIndex}
      />
    </>
  );
};
