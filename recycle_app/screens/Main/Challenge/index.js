import Challenge from "./Challenge";
import { connect } from "react-redux";
import { getChallenges } from "../../../redux/challengesSlice";

function mapDispatchToProps(dispatch) {
    return {
      getRooms: () => dispatch(getChallenges()),
      increasePage: () => dispatch(increasePage())
    };
  }
  
  function mapStateToProps(state) {
    return state.roomsReducer.explore;
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Challenge);
  