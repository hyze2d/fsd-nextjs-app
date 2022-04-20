import type { HTMLAttributes } from 'react';

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'teritary' | 'text' | 'outline' | 'link';
};

export type { ButtonProps };
