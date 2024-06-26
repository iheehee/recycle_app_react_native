import React, { useEffect } from "react";
import { Alert, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import api from "../../api";
import { useSelector, useDispatch } from "react-redux";
import { modify_Certifications } from "../../modules/certificationSlice";

const EditButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
`;

export default ({ data_to_modify, image }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const jwt = useSelector((state) => state.usersReducer.token);
  const { certification_num, challenge_id } = data_to_modify;

  const callApi = async () => {
    const formData = new FormData();
    formData.append("file", {
      name: `${certification_num}.jpeg`,
      type: "image/jpeg",
      uri: image,
    });

    formData.append("document", JSON.stringify(data_to_modify));
    try {
      const { data, status } = await api.modify_Certification(
        challenge_id,
        certification_num,
        formData,
        jwt
      );
      if (status === 201) {
        Alert.alert("인증 내용이 수정되었습니다.", "", [
          {
            text: "확인",
            onPress: () => {
              dispatch(
                modify_Certifications({
                  challenge_id: challenge_id,
                  certification_num: certification_num,
                  data,
                })
              );
              return navigation.navigate("Certification", {
                challenge_id: challenge_id,
              });
            }, //카메라 인증 후 디테일 페이지로 이동
          },
        ]);
      }

      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <EditButton onPress={() => callApi()}>
      <Text style={{ color: "black", fontSize: 19 }}>save</Text>
    </EditButton>
  );
};
