import type { ComponentPropsWithRef, FC } from 'react';

export const IconArrowDown: FC<ComponentPropsWithRef<'svg'>> = (props) => (
  <svg
    fill='none'
    height='14'
    viewBox='0 0 14 14'
    width='14'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M13 1L13 13L0.999999 13' stroke='white' strokeWidth='2' />
    <path d='M13 13L1 0.999999' stroke='white' strokeWidth='2' />
  </svg>
);
