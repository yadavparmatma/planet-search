import {connect} from 'react-redux';
import {setPlanets} from "../../actions/planets";
import Search from "./search";

export const mapStateToProps = state => ({
    planet: state.app.planet,
});

export const mapDispatchToProps = dispatch => ({
    setPlanets: (planets) => dispatch(setPlanets(planets))
});


export default connect(mapStateToProps, mapDispatchToProps)(Search);
