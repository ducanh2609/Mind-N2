import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from 'react-router-dom';
import App from "./App";

// import allReducers from "./store/reducers";
// import { createStore } from "redux";
// const store = createStore(allReducers)
import { Provider } from "react-redux";

import { store } from "./store-toolkit/redux/store.js";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
