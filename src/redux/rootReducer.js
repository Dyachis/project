import { combineReducers } from "redux";
import pseudoServer from './pseudo-server/pseudoServerReducer'


export default combineReducers({
    server: pseudoServer
});