import React, { FC } from "react";
import FacebookLogin from "react-facebook-login";

import { IFacebookResponse } from "../../bus/Auth/interfaces";

import styles from "./styles.module.scss";

interface FacebookButtonProps {
  callback: (response: IFacebookResponse) => void;
}

const FacebookButton: FC<FacebookButtonProps> = ({ callback }) => (
  <div className={styles.wrapperButton}>
    <FacebookLogin callback={callback} appId="367944637541485" />
  </div>
);

export default FacebookButton;
