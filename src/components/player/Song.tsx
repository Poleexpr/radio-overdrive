'use client';

import type { FC } from 'react';
import Typograf from 'typograf';

import { Typography } from '@/components';

import type { ISong } from '../../app/ocapella/Ocapella';

import styles from './player.module.scss';

interface SongProps {
  currentSong: ISong;
}

const tp = new Typograf({ locale: ['ru', 'en-US'] });

export const Song: FC<SongProps> = ({ currentSong }) => (
  <div className={styles.songContainer}>
    <img
      alt={currentSong.name.slice(currentSong.name.indexOf('#'))}
      className={styles.image}
      src={currentSong.cover}
    />
    <div>
      <Typography className={styles.date} tag='p' variant='text'>
        {currentSong.date.slice(0, 10).split('-').reverse().join('.')}
      </Typography>
      <Typography className={styles.title} tag='h4' variant='title5'>
        {currentSong.name.slice(currentSong.name.indexOf('#'))}
      </Typography>
      <Typography className={styles.content} tag='p' variant='text'>
        {tp.execute(currentSong.description)}
      </Typography>
    </div>
  </div>
);
