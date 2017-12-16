import {combineReducers} from 'redux';
import {planets} from "./planet-reducer";
import {login} from "./login-reducer";

const rootReducer = combineReducers({
    planets,
    login,
});

export default rootReducer;
