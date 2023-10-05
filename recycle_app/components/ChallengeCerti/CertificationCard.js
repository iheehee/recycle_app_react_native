import React from "react";
import styled from "styled-components/native";
import { Dimensions, View, Image, Text, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@rneui/themed";
import { getMyCertifications } from "../../modules/certificationSlice";
import Ip from "../../util/Ip";
import api from "../../api";

const { width, height } = Dimensions.get("screen");

const CertificationContainer = styled.View`
  background-color: white;
  width: ${width / 7}px;
  height: ${height / 8}px;
  padding: 8px;
  align-items: center;
`;

const Num = styled.Text`
  color: white;
`;

const DurationContainer = styled.View`
  padding: 1px 17px;
  background-color: black;
  border-radius: 10px;
`;

const BgContainer = styled.View`
  align-items: center;
`;

const ImageContainer = styled.View`
  margin: 5px 0px;
`;

const ButtonContainer = styled.View`
  margin-top: 10px;
`;

export default ({ challengeId, banner, certificationId, num }) => {
  const jwt = useSelector((state) => state.usersReducer.token);
  const dispatch = useDispatch();
  const deleteCertification = (challengeId, certificationId, jwt) => {
    Alert.alert("인증을 삭제하시겠습니까?", "", [
      {
        text: "확인",
        onPress: () => {
          api
            .removeCertification(challengeId, certificationId, jwt)
            .then((response) => {
              const { result } = response.data;
              Alert.alert(result, "", [
                {
                  text: "확인",
                  onPress: () => dispatch(getMyCertifications(jwt)),
                },
              ]);
            });
        },
      },
      {
        text: "취소",
      },
    ]);
  };
  return (
    <BgContainer>
      <CertificationContainer
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
        <DurationContainer>
          <Num>{num}</Num>
        </DurationContainer>
        <ImageContainer>
          <Image
            source={{ uri: Ip.localIp + banner }}
            style={{ width: 50, height: 50, borderRadius: 20 }}
          />
        </ImageContainer>
      </CertificationContainer>
      <ButtonContainer>
        <Button
          title="삭제"
          buttonStyle={{
            borderColor: "gray",
          }}
          type="outline"
          titleStyle={{ color: "gray", fontSize: 11 }}
          containerStyle={{
            width: 50,
          }}
          onPress={() => deleteCertification(challengeId, certificationId, jwt)}
        />
      </ButtonContainer>
    </BgContainer>
  );
};
