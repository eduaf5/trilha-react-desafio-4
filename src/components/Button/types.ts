import { ReactNode, ButtonHTMLAttributes } from 'react';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  disabled?: boolean;
  children?: ReactNode;
}
