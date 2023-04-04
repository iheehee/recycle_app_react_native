import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { getChallenges } from '../../../modules/challengesSlice';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`
const StyledText = styled.Text`
    font-size: 30px;
`


export default () => {
    useEffect(() => { 
        console.log(getChallenges(1));
     },[]);
    return(
 <Container>
     <StyledText>challenge</StyledText>
 </Container>
 );   
};