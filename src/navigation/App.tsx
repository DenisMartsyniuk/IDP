import React, { FC, useContext } from "react";

import Private from "./Private";
import Public from "./Public";

import { AuthContext } from "../bus/Auth/context/authContext";

const App: FC = () => {
  const { token } = useContext(AuthContext);

  return token ? <Private /> : <Public />;
};

export default App;
