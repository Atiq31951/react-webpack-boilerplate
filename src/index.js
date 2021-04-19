import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
// import domReady from "_/utils/domReady";
import { store } from "_/store/createStore";


// Promise.all([domReady() /*, loadStore(store)*/]).then(() =>
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
// );
