import { connect } from "react-redux";
import { getMyChallenges } from "../../../modules/userSlice";
import ChallengeContainer from "./ChallengeContainer";
import { getMyCertifications } from "../../../modules/certificationSlice";

function mapDispatchToProps(dispatch) {
  return {
    getMyChallenges: (jwt) => dispatch(getMyChallenges(jwt)),
    getMyCertifications: (jwt) => dispatch(getMyCertifications(jwt)),
  };
}

function mapStateToProps(state) {
  return {
    myChallenges: state.usersReducer.profile.myChallenges,
    myCertifications: state.certificationReducer.myCertifications,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeContainer);
