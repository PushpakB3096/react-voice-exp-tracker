import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { Provider } from "./context/context";

import "./index.css";

// wrapping entire app in context API provider
ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
