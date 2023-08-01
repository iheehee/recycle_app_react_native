import React from "react";
import styled from "styled-components/native";

import Profile from "../screens/Main/Profile";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const StyledText = styled.Text`
  font-size: 30px;
`;

export default () => {
  
  return (
    <Container>
      <TopTab.Navigator>
        <TopTab.Screen name="Home" component={Profile} />
        <TopTab.Screen name="Settings" component={Profile} />
      </TopTab.Navigator>
    </Container>
  );
};
