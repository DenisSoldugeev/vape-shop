import { ReactNode } from 'react';

export type Variant =
  | 'primary'
  | 'secondary'
  | 'outlinePrimary'
  | 'outlineSecondary';
export type Size = 'small' | 'medium' | 'large';
export interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: Variant;
  size?: Size;
  isLoading?: boolean;
  className?: string;
}
