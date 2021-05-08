import { applyMiddleware, createStore } from "redux";
import reducer from "../reducer/index";
import loggerMiddleware from "../middleware/logger";

export default createStore(reducer, applyMiddleware(loggerMiddleware));
