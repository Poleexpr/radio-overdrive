// import {Cocomat, MicraDi}  from 'next/font/local';
// eslint-disable-next-line import/no-duplicates
// eslint-disable-next-line import/no-duplicates
import Cocomat from 'next/font/local';
// eslint-disable-next-line import/no-duplicates
import MicraDi from 'next/font/local';

const micraDi = MicraDi({
  src: '../../public/fonts/micradi.ttf',
  variable: '--micraDi',
});

const cocomat = Cocomat({
  src: [
    {
      path: '../../public/fonts/Cocomat.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Cocomat-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--cocomat',
});

export { cocomat, micraDi };
