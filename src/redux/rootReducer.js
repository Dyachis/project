import { combineReducers } from "redux";
import postReducer from './post/postReducer.js';


export default combineReducers({
    posts:postReducer
});