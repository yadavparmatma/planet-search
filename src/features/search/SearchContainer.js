import {connect} from 'react-redux';
import Search from "./search";

export const mapStateToProps = state => ({
    isLoggedIn: state.app.login.isLoggedIn
});

export default connect(mapStateToProps, null)(Search);
