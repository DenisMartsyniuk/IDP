import React, { FC } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Jobs from "../containers/Jobs";
import JobInfo from "../containers/JobInfo";
import { book } from "./book";

const Private: FC = () => (
  <Switch>
    <Route exact component={Jobs} path={book.jobs.index} />
    <Route exact component={JobInfo} path={book.jobs.jobInfo} />

    <Redirect to={book.jobs.index} />
  </Switch>
);

export default Private;
