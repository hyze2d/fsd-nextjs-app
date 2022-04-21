import cn from 'classnames';
import { FC } from 'react';
import styles from './button.module.scss';
import type { ButtonProps } from './button.props';

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
