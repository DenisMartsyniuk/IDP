import React, { FC } from "react";
import GoogleLogin, { GoogleLoginResponse } from "react-google-login";

import styles from "./styles.module.scss";

interface GoogleButtonProps {
  callback: (response: GoogleLoginResponse) => void;
}

const GoogleButton: FC<GoogleButtonProps> = ({ callback }) => (
  <div className={styles.wrapperButton}>
    {/* 
  // @ts-ignore */}
    <GoogleLogin
      clientId="12564109019-m3aa1v0kb3ocj3opjuidu9u61idrlcbf.apps.googleusercontent.com"
      buttonText="Login with Google"
      onSuccess={callback}
    />
  </div>
);

export default GoogleButton;
