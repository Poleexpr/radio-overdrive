import type { ComponentPropsWithRef, FC } from 'react';

export const IconArrowUpShort: FC<ComponentPropsWithRef<'svg'>> = (props) => (
  <svg
    fill='none'
    height='9'
    viewBox='0 0 16 9'
    width='16'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      clipRule='evenodd'
      d='M15.7071 8.70711C15.3166 9.09763 14.6834 9.09763 14.2929 8.70711L8 2.41421L1.70711 8.70711C1.31658 9.09763 0.683417 9.09763 0.292893 8.70711C-0.0976315 8.31658 -0.0976315 7.68342 0.292893 7.29289L7.29289 0.292893C7.68342 -0.0976311 8.31658 -0.0976311 8.70711 0.292893L15.7071 7.29289C16.0976 7.68342 16.0976 8.31658 15.7071 8.70711Z'
      fill='white'
      fillRule='evenodd'
    />
  </svg>
);
