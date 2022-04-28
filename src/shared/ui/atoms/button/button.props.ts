import type { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'teritary' | 'text' | 'outline' | 'link';
};

export type { ButtonProps };
