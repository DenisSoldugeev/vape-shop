import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  isLoading?: boolean;
  className?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  variant = 'primary',
  size = 'medium',
  isLoading = false,
  className,
}) => {
  const buttonClass = classNames(
    styles.btn,
    {
      [styles.btnPrimary]: variant === 'primary',
      [styles.btnSecondary]: variant === 'secondary',
      [styles.btnSmall]: size === 'small',
      [styles.btnMedium]: size === 'medium',
      [styles.btnLarge]: size === 'large',
      [styles.btnDisabled]: disabled,
    },
    className
  );

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled || isLoading}
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
