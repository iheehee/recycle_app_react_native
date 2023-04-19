import React from "react";
import Pt from "prop-types";
import styled from "styled-components/native";
import { Dimensions, View, Image } from "react-native";

const { width, height } = Dimensions.get("screen");

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: start;
`;

const TitleContainer = styled.Text`
  margin: 10px 0px 0px 6px;
  font-size: 15%;
  text-align: start;
  font-weight: lighter;
`;

const DurationContainer = styled.View`
  margin: 10px 0px 0px 6px;
  padding: 3px;
  background-color: #D8D8D8;
  border-radius: 5px;
`
const DurationText = styled.Text`

`

const ImageContainer = styled.View`
  margin: 0px 5px;
`;

const ChallengeCard = ({
  banner,
  title,
  owner,
  start_day,
  duration,
  frequency,
  max_member,
}) => (
  <Container>
    <ImageContainer>
      <Image
        source={{ uri: banner }}
        style={{ width: width / 2.2, height: height / 8, borderRadius: 10 }}
      />
    </ImageContainer>
    <TitleContainer>{title}</TitleContainer>
    <DurationContainer>
      <DurationText>
      {duration}
      </DurationText>
    </DurationContainer>
    {/*   <Text>{frequency}</Text>
    <Text>{max_member}</Text> */}
  </Container>
);

export default ChallengeCard;
