import { connect } from "react-redux";
import { getMyChallenges } from "../../../modules/userSlice";
import ChallengeContainer from "./ChallengeContainer";

function mapDispatchToProps(dispatch) {
  return {
    getMyChallenges: (page) => dispatch(getMyChallenges(page)),
  };
}

function mapStateToProps(state) {
  return state.usersReducer.profile;
}

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeContainer);
