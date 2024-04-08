import type { FC } from 'react';

import { Typography } from '@/components';

import styles from './errorText.module.scss';

interface ErrorTextProps {
  podcastLink: string;
}

export const ErrorText: FC<ErrorTextProps> = ({ podcastLink }) => (
  <div className={styles.link_container}>
    <a className={styles.link_wrapper} href={podcastLink} rel='noreferrer' target='_blank'>
      <Typography tag='p' variant='text5'>
        перейти на страницу подкаста
      </Typography>
    </a>
  </div>
);
