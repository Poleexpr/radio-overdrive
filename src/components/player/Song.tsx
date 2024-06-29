'use client';

import classnames from 'classnames';
import Image from 'next/image';
import type { FC } from 'react';
import Typograf from 'typograf';

import { Typography } from '@/components';
import { podcastBlurData } from '@/utils/helpers';

import type { ISong } from '../../app/ocapella/Ocapella';

import styles from './player.module.scss';

interface SongProps {
  currentSong: ISong;
  overSign: boolean;
}

const tp = new Typograf({ locale: ['ru', 'en-US'] });

export const Song: FC<SongProps> = ({ currentSong, overSign }) => (
  <div className={styles.songContainer}>
    <Image
      alt={currentSong.name.slice(currentSong.name.indexOf('#'))}
      blurDataURL={podcastBlurData}
      className={styles.image}
      height={120}
      placeholder='blur'
      src={currentSong.cover}
      width={120}
    />
    <div>
      <Typography className={styles.date} tag='p' variant='text'>
        {currentSong.date.slice(0, 10).split('-').reverse().join('.')}
      </Typography>
      {overSign ? (
        <div className={styles.title}>
          <span>
            <Typography className={styles.titlePath} tag='span' variant='title5'>
              {currentSong.name.slice(
                currentSong.name.indexOf('#'),
                currentSong.name.indexOf('|') + 1,
              )}
            </Typography>
            <Typography
              className={classnames(styles.titlePath, styles.titlePath2)}
              tag='span'
              variant='title5'
            >
              {currentSong.name.slice(currentSong.name.indexOf('|') + 2)}
            </Typography>
          </span>
        </div>
      ) : (
        <Typography className={styles.title} tag='h4' variant='title5'>
          {currentSong.name.slice(currentSong.name.indexOf('#'))}
        </Typography>
      )}

      <Typography className={styles.content} tag='p' variant='text'>
        {tp.execute(currentSong.description)}
      </Typography>
    </div>
  </div>
);
