import React, { useMemo, FC } from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  title: string;
  type?: string;
  disabled?: boolean;
}

const Button: FC<IButtonProps> = ({ title, disabled, ...props }) => {
  const buttonStyle = useMemo(
    () =>
      classNames(styles.button, {
        [styles.disabled]: disabled
      }),
    [disabled]
  );

  return (
    <button
      disabled={disabled}
      className={buttonStyle}
      {...(props as React.HTMLAttributes<HTMLButtonElement>)}
    >
      {title}
    </button>
  );
};

export default Button;
