import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "antd/dist/antd.css";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";
import { StoreProvider } from "easy-peasy";

ReactDOM.render(
  <StoreProvider store={store}>
    <Router>
      <App />
    </Router>
  </StoreProvider>,
  document.getElementById("app")
);
