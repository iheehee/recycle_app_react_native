import React from "react";
import { TouchableOpacity , Button, Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
    align-items: center;
    flex: 1;
    `;

export default () => {
    return (
        <Container>
            
            <Button title="Sign up">
            <Text>hello</Text> </Button>
        </Container>
    );
}