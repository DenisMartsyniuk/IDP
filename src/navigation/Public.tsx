import React, { FC } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Login from "../containers/Login";
import { book } from "./book";

const Public: FC = () => (
  <Switch>
    <Route component={Login} path={book.login} />

    <Redirect to={book.login} />
  </Switch>
);

export default Public;
