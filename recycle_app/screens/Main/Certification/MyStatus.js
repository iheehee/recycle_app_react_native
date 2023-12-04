import React from "react";
import styled from "styled-components/native";
import { Dimensions, Image, Text, ScrollView, View } from "react-native";
import { useSelector } from "react-redux";

import CertificationCard from "../../../components/ChallengeCerti/CertificationCard";

const Container = styled.View`
  flex: 1;
`;
const CertificationContainer = styled.View`
  margin: 10px 20px;
  flex-direction: row;
`;
const CardContainer = styled.View`
  margin: 0px 5px;
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
              <CardContainer
                key={"cardContainer_" + certification.certification_id}
              >
                <CertificationCard
                  key={certification.certification_id}
                  challengeId={challengeId}
                  certificationId={certification.certification_id}
                  photo={certification.certification_photo}
                  comment={certification.certification_comment}
                  num={++num}
                  nickname={certification.participant_id.nickname_id}
                  avatar={certification.participant_id.avatar}
                  certification_data={certification.certification_date}
                />
              </CardContainer>
            ) : null
          )}
        </CertificationContainer>
      </ScrollView>
    </Container>
  );
};
