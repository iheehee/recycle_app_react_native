import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import CertiHeader from "../../../components/ChallengeCerti/CertiHeader";
import ChallengeCertification from "../Challenge/ChallengeCertification";
import CertiTapButton from "../../../components/ChallengeCerti/CertiTapButton";
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

const ChallengeCertiDetail = ({ route }) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <HeaderContainer>
          <CertiHeader route={route.params} />
        </HeaderContainer>
        <TabContainer>
          <CertiTapButton />
        </TabContainer>
      </ScrollView>
    </View>
  );
};

export default ChallengeCertiDetail;
