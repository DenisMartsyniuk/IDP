import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter as Router } from "react-router-dom";

import client from "./core";
import App from "./navigation/App";
import { AuthState } from "./bus/Auth/context/authState";

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <AuthState>
        <App />
      </AuthState>
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
