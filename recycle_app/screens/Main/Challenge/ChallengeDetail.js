import React, { useState } from 'react';
import styled from 'styled-components/native';
import api from '../../../api';
import axios from 'axios';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`
const StyledText = styled.Text`
    font-size: 30px;
`

export default ({ route }) => {
    const { challengeId } = route.params;
    const [challenge, setChallenge] = useState([]);
    const { data } = api.challengeDetail(challengeId);
    console.log(challenge);
    return (
        <Container>
        {data.map(d => (
            <StyledText>{ d.title }</StyledText>
        ))}
        </Container>
    );
}