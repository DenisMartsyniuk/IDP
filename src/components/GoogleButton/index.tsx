import React, { FC } from "react";
import GoogleLogin, { GoogleLoginResponse } from "react-google-login";

import { GOOGLE_ID } from "../../constants";

import styles from "./styles.module.scss";

interface GoogleButtonProps {
  callback: (response: GoogleLoginResponse) => void;
}

const GoogleButton: FC<GoogleButtonProps> = ({ callback }) => (
  <div className={styles.wrapperButton}>
    {/* 
  // @ts-ignore */}
    <GoogleLogin
      clientId={GOOGLE_ID}
      onSuccess={callback}
      buttonText="Login with Google"
    />
  </div>
);

export default GoogleButton;
