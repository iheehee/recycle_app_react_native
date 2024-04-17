import React from "react";
import styled from "styled-components/native";
import { Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import Ip from "../../util/Ip";
import BottomSheetMenu from "./ChallengeList/ModalMenu";
import { getMyCertifications } from "../../modules/certificationSlice";

const BgContainer = styled.TouchableOpacity`
  flex: 1;
  background-color: #050d18;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const HeaderContainer = styled.View`
  margin: 15px;
  flex-direction: row;
  justify-content: space-between;
`;
const ChallengeInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
const MainContainer = styled.View`
  margin-left: 10px;
  flex-direction: column;
  justify-content: flex-start;
  width: 70%;
`;
const DurationContainer = styled.View`
  margin-top: 5px;
  margin-bottom: 2px;
  width: 100%;
  flex-direction: row;
`;

const IconContainer = styled.View``;

const Title = styled.Text`
  font-size: 19px;
  font-weight: 400;
  color: white;
`;

export default ({ challenge, myCertifications }) => {
  const { id, title, start_day } = challenge;

  const navigation = useNavigation();
  const CertificationScreen = () =>
    navigation.navigate("Certification", { challengeId: id, myCertifications });
  const jwt = useSelector((state) => state.usersReducer.token);
  const dispatch = useDispatch();

  let dt = new Date(start_day);
  const startDay = () =>
    `${dt.getFullYear()}. ${dt.getMonth()}. ${dt.getDate()}`;
  return (
    <BgContainer
      style={{
        borderRadius: 15,
      }}
      onPress={() => {
        dispatch(getMyCertifications(id, jwt));
        return CertificationScreen();
      }}
    >
      <HeaderContainer>
        {/* <ImageContainer>
          <Image
            source={{ uri: Ip.localIp + title_banner }}
            style={{
              width: 50,
              height: 50,
              borderRadius: 30,
            }}
          />
        </ImageContainer> */}

        <ChallengeInfoContainer>
          <Title>{title}</Title>
        </ChallengeInfoContainer>

        <IconContainer>
          <BottomSheetMenu challengeId={id} />
        </IconContainer>
      </HeaderContainer>
    </BgContainer>
  );
};
