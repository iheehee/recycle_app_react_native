import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import CertiHeader from "../../../../components/ChallengeCerti/CertiHeader";
import ChallengeCertification from "../ChallengeCertification";
import CertiTapButton from "../../../../components/ChallengeCerti/CertiTapButton";
import { View, ScrollView, Dimensions, Text } from "react-native";

const Container = styled.View`
  flex: 1;
`;
const HeaderContainer = styled.View`
  background-color: white;
  flex: 1;
  padding-bottom: 20px;
`;
const TabContainer = styled.View`
  background-color: white;
  flex: 1;
`;

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

const ChallengeCertiDetail = ({ route }) => {
  const [headerData, setHeaderData] = useState({});
  const [certiData, setCertiData] = useState({});
  const tagData = route.params.dataTag;
  useEffect(() => {
    tagData === "challengeDatail"
      ? setHeaderData({ ...route.params })
      : setCertiData({ ...route.params });
  }, [tagData]);
  console.log(certiData);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <HeaderContainer>
          <CertiHeader route={headerData} />
          <Text>{certiData.image}</Text>
        </HeaderContainer>
        <TabContainer>
          <CertiTapButton route={certiData} />
        </TabContainer>
      </ScrollView>
    </View>
  );
};

export default ChallengeCertiDetail;
