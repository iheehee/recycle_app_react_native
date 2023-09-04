import { connect } from "react-redux";
import { getChallenges } from "../../../modules/challengesSlice";
/* import { getProfile } from "../../../modules/userSlice"; */
import ChallengeContainer from "./ChallengeContainer";

function mapDispatchToProps(dispatch) {
  return {
    getChallenges: (page) => dispatch(getChallenges(page)),
    increasePage: () => dispatch(increasePage()),
    /* getProfile: (jwt) => dispatch(getProfile(jwt)), */
  };
}

function mapStateToProps(state) {
  return state.challengesReducer.explore;
}

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeContainer);
