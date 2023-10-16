import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import CertiHeader from "../../../components/ChallengeCerti/CertiHeader";
import CertiTapButton from "../../../components/ChallengeCerti/CertiTapButton";
import { ScrollView } from "react-native";

const BgContainer = styled.View`
  flex: 1;
  background-color: white;
`;
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
    <BgContainer>
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
    </BgContainer>
  );
};
