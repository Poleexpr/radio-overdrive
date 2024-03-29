import classnames from 'classnames';
import type { ComponentPropsWithRef, FC, ReactNode } from 'react';

import styles from './buttonRectangle.module.scss';

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  onClick?: () => void;
  loading?: boolean;
  children: ReactNode;
}

export const ButtonRectangle: FC<ButtonProps> = ({
  type = 'button',
  disabled,
  loading,
  children,
  className,
  ...props
}) => {
  const classes = classnames(
    styles.button,
    {
      [styles.disabled]: disabled,
      [styles.loading]: loading,
    },
    className,
  );
  return (
    <button className={classes} disabled={loading || disabled} type={type} {...props}>
      <span className={styles.button_text}>{children}</span>
    </button>
  );
};
