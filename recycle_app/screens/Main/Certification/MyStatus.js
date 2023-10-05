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
const CardContainer = styled.View`
  margin: 0px 5px;
`;
const StyledText = styled.Text`
  font-size: 30px;
`;

export default ({ challengeId }) => {
  const myCertifications = useSelector(
    (state) => state.certificationReducer.myCertifications
  );
  let num = 0;

  return (
    <Container>
      <ScrollView horizontal={true}>
        <CertificationContainer>
          {myCertifications.map((certification) =>
            certification.challenge_id === challengeId ? (
              <CardContainer>
                <CertificationCard
                  challengeId={challengeId}
                  certificationId={certification.certification_id}
                  banner={certification.certification_photo}
                  num={++num}
                />
              </CardContainer>
            ) : null
          )}
        </CertificationContainer>
      </ScrollView>
    </Container>
  );
};
