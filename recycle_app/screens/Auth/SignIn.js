import React from "react";
import { TouchableOpacity, Dimensions } from "react-native";
import { Text, View,  } from "react-native";
import styled from "styled-components/native";

const { width } = Dimensions.get("screen");

const Container = styled.TextInput`
  width: ${width / 1.5}px;
  padding: 12.5px 20px;
  border: 1px solid grey;
  background-color: white;
  border-radius: 30px;
  margin-bottom: 10px;
  font-weight: 500;
`;

export default () => {
    return (
        <View>         
           
        </View>
    );
}