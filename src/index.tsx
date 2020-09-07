import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./navigation/App";
import { AuthState } from "./bus/Auth/context/authState";

ReactDOM.render(
  <Router>
    <AuthState>
      <App />
    </AuthState>
  </Router>,
  document.getElementById("root")
);
