import { FC } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';
import { ButtonProps } from 'types/button';

export const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    onClick,
    disabled = false,
    color = 'primary',
    outline = false,
    size = 'medium',
    isLoading = false,
    className,
    type = 'button',
  } = props;

  const buttonClass = classNames(
    styles.button,
    outline ? styles[`button-outline-${color}`] : styles[`button-${color}`],
    styles[`button-${size}`],
    disabled && styles.disabled,
    className
  );

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled || isLoading}
      type={type}
    >
      {isLoading ? (
        <>
          <div className={styles.loadingSpinner}></div>
        </>
      ) : (
        children
      )}
    </button>
  );
};
