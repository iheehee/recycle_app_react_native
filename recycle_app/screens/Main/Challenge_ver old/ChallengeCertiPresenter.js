import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Certi from "../../../navigation/Certi";
import styled from "styled-components/native";
import CertiHeader from "../../../components/ChallengeCerti/CertiHeader";
import {
  Animated,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  SafeAreaView,
  Text,
} from "react-native";

const { width, height } = Dimensions.get("screen");

const Container = styled.View`
  flex: 1;
  justify-contents: end;
  flex-direction: column;
`;
const TabContainer = styled.View``;
const CertiContainer = styled.View``;

const TabButton = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 35px;
  margin: 0px 16px;
  border-bottom-width: 2px;
  border-bottom-color: ${(props) =>
    props.isFocused ? "black" : "transparent"};
`;

export default ({ route }) => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Container>
        <CertiContainer>
          <Text>aaaaa</Text>
          <Text>aaaaa</Text>
          <Text>aaaaa</Text>
          <Text>aaaaa</Text>
          <Text>aaaaa</Text>
          {/* <CertiHeader route={route} /> */}
        </CertiContainer>
        <TabContainer style={{ height: 1000 }}>
          <Certi />
        </TabContainer>
      </Container>
    </ScrollView>
  );
};
