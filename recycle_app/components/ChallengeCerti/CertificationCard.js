import React from "react";
import styled from "styled-components/native";
import { Dimensions, View, Image, TouchableOpacity, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@rneui/themed";
import { getMyCertifications } from "../../modules/certificationSlice";
import Ip from "../../util/Ip";
import api from "../../api";
import { useNavigation } from "@react-navigation/native";

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

export default ({
  challengeId,
  photo,
  certificationId,
  comment,
  nickname,
  num,
  avatar,
  certification_data,
}) => {
  const jwt = useSelector((state) => state.usersReducer.token);
  const dispatch = useDispatch();
  const navigation = useNavigation();
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
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Feed", {
                photo: photo,
                certificationId: certificationId,
                comment: comment,
                nickname: nickname,
                avatar: avatar,
                certification_data: certification_data,
              })
            }
          >
            <Image
              source={{ uri: Ip.localIp + photo }}
              style={{ width: 50, height: 50, borderRadius: 20 }}
            />
          </TouchableOpacity>
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
