import React from "react";
import styled from "styled-components/native";
import { Dimensions, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CertiBtn from "../../components/ChallengeCerti/CertiBtn";
import { Feather } from "@expo/vector-icons";

const BgContainer = styled.View`
  flex: 1;
  background-color: white;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const ImageContainer = styled.View`
  align-content: start;
`;
const HeaderContainer = styled.View`
  margin: 10px;
  flex-direction: row;
  align-items: center;
`;
const ChallengeInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const MainContainer = styled.View`
  margin-left: 15px;
  align-items: left;
  flex-direction: column;
`;
const DurationContainer = styled.View`
  margin-top: 5px;
  margin-bottom: 2px;
  width: 100%;
  flex-direction: row;
`;
const InfoContainer = styled.View`
  width: 85%;
`;
const IconContainer = styled.View`
  align-items: center;
`;
const BottonContainer = styled.View`
  margin-top: 30px;
`;
const Title = styled.Text`
  font-size: 17px;
  font-weight: 400;
  color: #222222;
`;
const TextBox = styled.Text`
  font-size: 15px;
  font-weight: 400;
  color: gray;
`;

export default ({ challenge }) => {
  const {
    id,
    title,
    title_banner,
    duration,
    frequency,
    member,
    count_member,
    max_member,
    applied_member,
    start_day,
    summery,
    description,
    notice,
    success_example,
  } = challenge;

  const navigation = useNavigation();
  const Certification = () =>
    navigation.navigate("CertificationDetail", {
      screen: "ChallengeCertiDetail",
      params: challenge,
    });
  const localIp = "http://192.168.0.55:8080/";
  //const localIp = "http://192.168.35.73:8080/";
  let dt = new Date(start_day);
  const startDay = () =>
    `${dt.getFullYear()}. ${dt.getMonth()}. ${dt.getDate()}`;
  return (
    <BgContainer
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 1,
          height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        borderRadius: 15,
      }}
    >
      <HeaderContainer>
        <ImageContainer>
          <Image
            source={{ uri: localIp + title_banner }}
            style={{
              width: 50,
              height: 50,
              borderRadius: 30,
            }}
          />
        </ImageContainer>
        <MainContainer>
          <ChallengeInfoContainer>
            <InfoContainer>
              <Title>{title}</Title>
              <DurationContainer>
                <TextBox>{`${frequency}, `}</TextBox>
                <TextBox>{duration}</TextBox>
              </DurationContainer>
              <TextBox>{"인증시간:" + " " + "00:00:00 ~ 23:59:59"}</TextBox>
              <TextBox>{"시작일:" + "    " + startDay()}</TextBox>
            </InfoContainer>
            <IconContainer>
              <TouchableOpacity onPress={() => Certification()}>
                <Feather name="chevron-right" size={24} color="#222222" />
              </TouchableOpacity>
            </IconContainer>
          </ChallengeInfoContainer>
          <BottonContainer>
            <CertiBtn challengeId={id} />
          </BottonContainer>
        </MainContainer>
      </HeaderContainer>
    </BgContainer>
  );
};
