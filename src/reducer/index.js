import { combineReducers } from "redux";
import scoreReducer from "./score";
import authReducer from "./auth";

export default combineReducers({ score: scoreReducer, auth: authReducer });
