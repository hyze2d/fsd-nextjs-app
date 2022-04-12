import { forwardRef } from 'react';
import cn from 'classnames';

import type { ButtonProps } from './button.props';
import styles from './button.module.scss';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <button ref={ref} className={cn(styles.button, className)} {...props} />
  )
);

export { Button };
