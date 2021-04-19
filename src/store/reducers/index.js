import { combineReducers } from "redux";

import AUthReducer from "_/store/reducers/auth";

export default combineReducers({
  auth: AUthReducer,
});
