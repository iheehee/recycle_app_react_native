import React from "react";
import styled from "styled-components/native";
import { Dimensions, Image, Text, ScrollView, View } from "react-native";
import { useSelector } from "react-redux";
import CertificationCard from "../../../components/ChallengeCerti/CertificationCard";

const Container = styled.View`
  flex: 1;
`;
const CertificationContainer = styled.View`
  flex-direction: row;
`;
const StyledText = styled.Text`
  font-size: 30px;
`;

export default ({ challengeId }) => {
  const myCertifications = useSelector(
    (state) => state.certificationReducer.myCertifications
  );
  return (
    <Container>
      <CertificationContainer>
        {myCertifications.map((certification) =>
          certification.challenge_id === challengeId ? (
            <CertificationCard banner={certification.certification_photo} />
          ) : null
        )}
      </CertificationContainer>
      <Text style={{ fontSize: 34 }}>Test</Text>
    </Container>
  );
};
