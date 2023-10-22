import { FC, InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<InputProps> = ({
  size = 'medium',
  className,
  ...rest
}) => {
  const inputClass = classNames(
    styles.input,
    styles[`input-${size}`],
    className
  );
  return <input className={inputClass} {...rest} />;
};

export default Input;
