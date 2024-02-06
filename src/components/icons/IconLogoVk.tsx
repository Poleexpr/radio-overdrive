import { ComponentPropsWithRef, FC } from 'react';

export const IconLogoVk: FC<ComponentPropsWithRef<'svg'>> = (props) => (
  <svg
    width='58'
    height='58'
    viewBox='0 0 58 58'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g filter='url(#filter0_b_1558_7798)'>
      <rect width='58' height='58' rx='29' fill='url(#paint0_linear_1558_7798)' />
      <rect
        x='0.25'
        y='0.25'
        width='57.5'
        height='57.5'
        rx='28.75'
        stroke='url(#paint1_linear_1558_7798)'
        stroke-width='0.5'
      />
      <circle cx='29' cy='29' r='28.75' stroke='url(#paint2_linear_1558_7798)' stroke-width='0.5' />
      <path
        d='M16.647 18.6497H11.0664C11.4957 34.3421 20.272 40.4474 30.8131 40.2089V32.2911C35.7736 32.5296 39.2078 35.7253 41.1157 40.2089H46.8394C44.8188 34.5659 40.8773 31.0033 36.9661 29.477C40.6865 27.7599 44.4546 24.0395 45.5993 18.6497H40.1618C38.4135 23.6179 35.6782 26.949 30.8131 27.7599V18.6497H25.9957V34.3421C19.8427 32.7204 16.9766 27.0661 16.647 18.6497Z'
        stroke='white'
        stroke-width='0.5'
      />
    </g>
    <defs>
      <filter
        id='filter0_b_1558_7798'
        x='-2'
        y='-2'
        width='62'
        height='62'
        filterUnits='userSpaceOnUse'
        color-interpolation-filters='sRGB'
      >
        <feFlood flood-opacity='0' result='BackgroundImageFix' />
        <feGaussianBlur in='BackgroundImageFix' stdDeviation='1' />
        <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_1558_7798' />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='effect1_backgroundBlur_1558_7798'
          result='shape'
        />
      </filter>
      <linearGradient
        id='paint0_linear_1558_7798'
        x1='8.7'
        y1='-40.9625'
        x2='67.7013'
        y2='-30.6712'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='#9337D4' />
        <stop offset='1' stop-color='#5B31C0' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_1558_7798'
        x1='8.7'
        y1='-40.9625'
        x2='67.7013'
        y2='-30.6712'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='#9337D4' />
        <stop offset='1' stop-color='#5B31C0' />
      </linearGradient>
      <linearGradient
        id='paint2_linear_1558_7798'
        x1='8.7'
        y1='-40.9625'
        x2='67.7013'
        y2='-30.6712'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='#9337D4' />
        <stop offset='1' stop-color='#5B31C0' />
      </linearGradient>
    </defs>
  </svg>
);
