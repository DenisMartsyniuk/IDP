import React, { FC, useContext } from "react";
import { GoogleLoginResponse } from "react-google-login";

import FacebookButton from "../../components/FacebookButton";
import GoogleButton from "../../components/GoogleButton";
import { AuthContext } from "../../bus/Auth/context/authContext";
import { IFacebookResponse } from "../../bus/Auth/interfaces";

import styles from "./styles.module.scss";

const Login: FC = () => {
  const { onAddToken } = useContext(AuthContext);

  const responseFacebook = (response: IFacebookResponse) =>
    onAddToken(response.accessToken);

  const responseGoogle = (response: GoogleLoginResponse) => {
    onAddToken(response.accessToken);
  };

  return (
    <div className={styles.wrapperLogin}>
      <div className={styles.title}>
        You can login using Facebook or Google account
      </div>

      <div className={styles.wrapperButtons}>
        <FacebookButton callback={responseFacebook} />
        <GoogleButton callback={responseGoogle} />
      </div>
    </div>
  );
};

export default Login;
