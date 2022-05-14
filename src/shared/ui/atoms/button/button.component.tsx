import cn from 'classnames';

import type { FC } from 'react';

import styles from './button.module.scss';

import type { ButtonProps } from './button.props';

const Button: FC<ButtonProps> = ({ className, variant, ...props }) => (
  <button
    className={cn(styles.button, className, styles[variant as string])}
    type='button'
    {...props}
  />
);

Button.defaultProps = {
  variant: 'primary'
};

export { Button };
