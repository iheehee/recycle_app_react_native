import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import CertiHeader from "../../../components/ChallengeCerti/CertiHeader";
import ChallengeCertification from "../Challenge/ChallengeCertification";
import CertiTapButton from "../../../components/ChallengeCerti/CertiTapButton";
import { View, ScrollView, Dimensions, Text } from "react-native";

const BodyContainer = styled.View`
  align-items: flex-start;
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

export default ({ route }) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <BodyContainer>
          <HeaderContainer>
            <CertiHeader route={route.params.challenge} />
          </HeaderContainer>
          <TabContainer>
            <CertiTapButton route={route.params.challenge} />
          </TabContainer>
        </BodyContainer>
      </ScrollView>
    </View>
  );
};
