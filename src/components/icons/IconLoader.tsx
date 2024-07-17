import type { FC, ComponentPropsWithRef } from 'react';

export const IconLoader: FC<ComponentPropsWithRef<'svg'>> = (props) => (
  <svg
    fill='none'
    height='200'
    viewBox='0 0 200 200'
    width='200'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M99.5551 72.1494C83.2408 72.1494 70.0156 84.6184 70.0156 99.9999C70.0156 115.381 83.2408 127.85 99.5551 127.85C115.869 127.85 129.095 115.381 129.095 99.9999C129.095 84.6184 115.869 72.1494 99.5551 72.1494ZM99.5405 126.039C87.3514 126.039 77.4705 114.333 77.4705 99.8938C77.4705 85.4542 87.3514 73.7489 99.5405 73.7489C111.729 73.7489 121.61 85.4542 121.61 99.8938C121.61 114.333 111.729 126.039 99.5405 126.039Z'
      fill='white'
    />
    <rect
      fill='white'
      height='87.4633'
      transform='rotate(50.07 133.07 71.375)'
      width='1.44989'
      x='133.07'
      y='71.375'
    />
  </svg>
);
