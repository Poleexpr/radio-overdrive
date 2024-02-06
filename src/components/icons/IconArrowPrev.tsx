import { ComponentPropsWithRef, FC } from 'react';

export const IconArrowPrev: FC<ComponentPropsWithRef<'svg'>> = (props) => (
  <svg
    width='19'
    height='19'
    viewBox='0 0 19 19'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M10.4844 17.9707L1.99909 9.48542L10.4844 1.00014' stroke='white' stroke-width='2' />
    <path d='M1.99909 9.48542H18.9697' stroke='white' stroke-width='2' />
  </svg>
);
