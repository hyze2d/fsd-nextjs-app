import { FC, forwardRef } from 'react';
import cn from 'classnames';

import type { ButtonProps } from './button.props';
import styles from './button.module.scss';

const Button: FC<ButtonProps> = ({ className, variant, ...props }) => (
  <button
    className={cn(styles.button, className, styles[variant as string])}
    {...props}
  />
);

Button.defaultProps = {
  variant: 'primary'
};

export { Button };
