import React, { useEffect } from "react";
import ChallengePresenter from "./ChallengePresenter";
import { createStackNavigator } from "@react-navigation/stack";
import ChallengeDetail from "./ChallengeDetail";

const ChallengeNavi = createStackNavigator();

export default ({ getChallenges, challenges, page }) => {
  useEffect(() => {
    getChallenges(1);
  }, []);
  useEffect(() => {
    getChallenges(page);
  }, [page]);
  
  return (
  <ChallengeNavi.Navigator
    mode='modal'
    screenOptions={{
      headerBackTitleVisible: false,
      headerTransparent: true,
    }}
  >
    <ChallengeNavi.Screen
      name="Challenge"
      component={ChallengePresenter}
      initialParams={{challenges : challenges}}
    />
    <ChallengeNavi.Screen name="ChallengeDetail" component={ChallengeDetail} options={{ title: "ChallengeDetail" }}/>
  </ChallengeNavi.Navigator>);
  {/* <ChallengePresenter challenges={challenges} />;) */}
};
