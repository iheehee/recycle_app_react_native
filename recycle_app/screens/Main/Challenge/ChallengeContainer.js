import React, { useEffect } from 'react';
import ChallengePresenter from "./ChallengePresenter";
import api from "../../../api";
import { useSelector } from 'react-redux';

export default ( {getChallenges, challenges}) => {
    const ss = api.challenges(1);
    const { data : results } = ss; 
    
    useEffect(() => { 
        getChallenges(1);
        console.log(results);
     },[]);
     /* const ss = useSelector((state) => state);
     console.log(ss); */
    return <ChallengePresenter challenges={challenges} />;   
};