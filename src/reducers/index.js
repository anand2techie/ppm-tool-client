import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import projectReducer from "./projectReducer";
import securityReducer from "./securityReducer";
import backlogReducer from "./backlogReducer";

export default combineReducers({
  errors: errorReducer,
  project: projectReducer,
  security: securityReducer,
  backlog: backlogReducer,
});
