import { ReactNode } from 'react';

export type Color =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger';

export type Size = 'small' | 'medium' | 'large';

export interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  color?: Color;
  outline?: boolean;
  size?: Size;
  isLoading?: boolean;
  className?: string;
}
