import { handleActions } from "redux-actions";

import {
  USER_DATA_LOAD_STATUS,
  USER_ACC_INFO,
} from "_/store/store-constants.yaml";

const initialState = {
  id: null,
  name: "",
  email: "",
  isAuthorized: false,
  status: USER_DATA_LOAD_STATUS.IDLE,
  errors: [],
  password: "",
  user: null,
};

const authReducers = handleActions(
  {
    [USER_DATA_LOAD_STATUS.SET_USER_STATUS]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    [USER_ACC_INFO.SET_USER_ACC_INFO]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
  initialState
);

export default authReducers;
