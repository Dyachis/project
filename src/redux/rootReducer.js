import { combineReducers } from "redux";
import postReducer from './post/postReducer.js';
import pseudoServer from './pseudo-server/pseudoServerReducer'


export default combineReducers({
    post: postReducer,
    server: pseudoServer
});