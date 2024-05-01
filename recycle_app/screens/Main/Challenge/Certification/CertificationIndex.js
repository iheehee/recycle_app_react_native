import { connect } from "react-redux";
import CertificationList from "./CertificationList";
import { getMyCertifications } from "../../../../modules/certificationSlice";

function mapDispatchToProps(dispatch) {
  return {
    getMyCertifications: (jwt) => dispatch(getMyCertifications(jwt)),
  };
}

function mapStateToProps(state) {
  return {
    myCertifications: state.certificationReducer.myCertifications,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CertificationList);
