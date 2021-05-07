import { combineReducers } from "redux";
import findReducer from './findStorage/findReducer';


export default combineReducers({
    arr:findReducer
});