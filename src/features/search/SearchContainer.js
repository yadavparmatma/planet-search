import {connect} from 'react-redux';
import Search from "./Search";

export const mapStateToProps = state => ({
    isLoggedIn: state.app.login.isLoggedIn
});

export default connect(mapStateToProps, null)(Search);
