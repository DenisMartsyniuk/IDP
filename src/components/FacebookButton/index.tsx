import React, { FC } from "react";
import FacebookLogin from "react-facebook-login";

import { FACEBOOK_ID } from "../../constants";
import { IFacebookResponse } from "../../bus/Auth/interfaces";

import styles from "./styles.module.scss";

interface FacebookButtonProps {
  callback: (response: IFacebookResponse) => void;
}

const FacebookButton: FC<FacebookButtonProps> = ({ callback }) => (
  <div className={styles.wrapperButton}>
    <FacebookLogin callback={callback} appId={FACEBOOK_ID} />
  </div>
);

export default FacebookButton;
