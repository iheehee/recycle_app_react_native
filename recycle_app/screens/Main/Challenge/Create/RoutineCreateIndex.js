import { connect } from "react-redux";
import RoutineCreate from "./RoutineCreate";
import { createChallenge } from "../../../../modules/createChallengeSlice";

function mapDispatchToProps(dispatch) {
  return {
    createChallenge: () => dispatch(createChallenge()),
  };
}

function mapStateToProps(state) {
  return {
    newChallenge: state.createChallengeReducer.newChallenge,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RoutineCreate);
