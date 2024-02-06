import { ComponentPropsWithRef, FC } from 'react';

export const IconButtonPlay: FC<ComponentPropsWithRef<'svg'>> = (props) => (
  <svg
    width='72'
    height='72'
    viewBox='0 0 72 72'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g id='Group 76'>
      <circle id='Ellipse 20' cx='36' cy='36' r='36' fill='url(#paint0_linear_1207_292)' />
      <path id='Polygon 1' d='M50 36L29 48.1244L29 23.8756L50 36Z' fill='white' />
    </g>
    <defs>
      <linearGradient
        id='paint0_linear_1207_292'
        x1='4.41718'
        y1='-18.6626'
        x2='54.3658'
        y2='-23.9342'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='#9337D4' />
        <stop offset='1' stop-color='#5B31C0' />
      </linearGradient>
    </defs>
  </svg>
);
