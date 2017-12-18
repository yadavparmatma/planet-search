import {connect} from 'react-redux';
import {setLoginStatus} from "../../actions/login";
import Login from "./Login";

export const mapDispatchToProps = dispatch => ({
    setLoginStatus: (status) => dispatch(setLoginStatus(status))
});

export default connect(null, mapDispatchToProps)(Login);