import {combineReducers} from 'redux';
import {planets} from "./planet-reducer";

const rootReducer = combineReducers({
    planets,
});

export default rootReducer;
