import React, { FC } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../containers/Home";
import { book } from "./book";

const Private: FC = () => (
  <Switch>
    <Route component={Home} path={book.home} />

    <Redirect to={book.home} />
  </Switch>
);

export default Private;
