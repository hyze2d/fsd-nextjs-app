import { FC } from 'react';
import { ButtonProps } from './button.props';
import cn from 'classnames';
import styles from './button.module.scss';

const Button: FC<ButtonProps> = ({ className, ...props }) => (
  <button className={cn(styles.button, className)} {...props} />
);

export { Button };
