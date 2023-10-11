import { FC } from 'react';
import classNames from 'classnames';
import { ButtonProps, Size, Variant } from 'types/button';
import styles from './Button.module.scss';

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  variant = 'primary',
  size = 'medium',
  isLoading = false,
  className,
}) => {
  const getVariantClass = (variant: Variant) => {
    switch (variant) {
      case 'primary':
        return styles.buttonPrimary;
      case 'secondary':
        return styles.buttonSecondary;
      case 'outlinePrimary':
        return styles.buttonOutlinePrimary;
      case 'outlineSecondary':
        return styles.buttonOutlineSecondary;
      default:
        return '';
    }
  };

  const getSizeClass = (size: Size) => {
    switch (size) {
      case 'small':
        return styles.buttonSmall;
      case 'medium':
        return styles.buttonMedium;
      case 'large':
        return styles.buttonLarge;
      default:
        return '';
    }
  };

  const buttonClass = classNames(
    styles.button,
    getVariantClass(variant),
    getSizeClass(size),
    { [styles.buttonDisabled]: disabled },
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
