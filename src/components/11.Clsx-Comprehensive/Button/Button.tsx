import styles from './Button.module.scss';
import React, { ReactNode, MouseEvent, FocusEvent, KeyboardEvent } from 'react';
import clsx from 'clsx';

type ButtonProps = {
  children: ReactNode;
  color?: 'primary' | 'secondary' | 'danger';
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLButtonElement>) => void;
  onFocus?: (event: FocusEvent<HTMLButtonElement>) => void;
  onBlur?: (event: FocusEvent<HTMLButtonElement>) => void;
  onMouseEnter?: (event: MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
};

export const Button: React.FC<ButtonProps> = (props) => {
  const { color = 'primary', children, ...remainingProps } = props;

  return (
    <button
      className={clsx(styles.button, {
        [styles.primary]: color === 'primary',
        [styles.secondary]: color === 'secondary',
        [styles.danger]: color === 'danger',
      })}
      {...remainingProps}
    >
      {children}
    </button>
  );
};
