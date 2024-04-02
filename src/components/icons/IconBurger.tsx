import type { ComponentPropsWithRef, FC } from 'react';

export const IconBurger: FC<ComponentPropsWithRef<'svg'>> = (props) => (
  <svg
    fill='none'
    height='22'
    viewBox='0 0 24 22'
    width='24'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g id='Group 273'>
      <path d='M0 1H24' id='Line 3' stroke='white' strokeWidth='2' />
      <path d='M0 11H24' id='Line 4' stroke='white' strokeWidth='2' />
      <path d='M0 21H24' id='Line 5' stroke='white' strokeWidth='2' />
    </g>
  </svg>
);
