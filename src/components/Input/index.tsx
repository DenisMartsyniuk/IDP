import React, { useMemo, useState, FC } from "react";
import classNames from "classnames";

import { ReactComponent as EyeIcon } from "../../assets/icons/eye.svg";

import styles from "./styles.module.scss";

interface IInputProps {
  name: string;
  type?: string;
  icon?: boolean;
  error?: string;
  touched?: boolean;
  placeholder?: string;
  value: string | number;
  onShowPassword?: () => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<IInputProps> = ({
  icon,
  error,
  value,
  touched,
  onChange,
  placeholder,
  type = "text",
  onShowPassword,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const hasError = useMemo(() => error && touched, [error, touched]);
  const inputStyle = useMemo(
    () =>
      classNames(styles.input, {
        [styles.withIcon]: icon,
        [styles.error]: hasError
      }),
    [icon, hasError]
  );
  const showPasswordVar = useMemo(() => (!showPassword ? type : "text"), [
    showPassword,
    type
  ]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperInput}>
        <input
          type={showPasswordVar}
          value={value}
          onChange={onChange}
          className={inputStyle}
          placeholder={placeholder}
          {...props}
        />

        {icon && (
          <div className={styles.icon}>
            <EyeIcon onClick={() => setShowPassword(!showPassword)} />
          </div>
        )}
      </div>

      {hasError && <div className={styles.errorText}>{error}</div>}
    </div>
  );
};

export default Input;
