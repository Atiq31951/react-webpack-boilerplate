// import { configureStore } from './configureStore';
import { createStore } from "redux";
// import preloadState from './preloadState';
// import applyMiddleware from './applyMiddleware';
// import { middleware as sagaMiddleware } from './saga/middleware';
// import { run as runSagas } from './saga/run';

import rootReducer from "_/store/reducers";

export const store = createStore(
  rootReducer
  // applyMiddleware(
  //   navigationMiddleware,
  //   sagaMiddleware,
  // ),
);

// export const loadStore = async store => {
//   runSagas();
//   store.dispatch(bootstrap(preloadState()));
// };
