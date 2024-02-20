'use client';

import { useState } from 'react';
import { Element } from 'react-scroll';

import { Podcast, Typography } from '@/components';

import uikit from '../uikit.module.scss';

import styles from './ocapella.module.scss';

const Ocapella = () => {
  // кнопка будет менять состяние с false на true
  // а класс в подкаст будет передаваться в зависимости от состояния
  const [showPodcast, setShowPodcast] = useState(false);

  const togglePodcast = () => {
    setShowPodcast(!showPodcast);
  };

  const className = showPodcast ? styles.showPodcast : styles.hidePodcast;

  return (
    <Element className='element' name='program'>
      <div className={styles.container}>
        <Typography tag='h2' variant='title2'>
          о’капелла
        </Typography>
        <Typography className={styles.description} tag='p' variant='text2'>
          {' '}
          Подкаст о музыке как феномене и чуде.
        </Typography>
        <button className={`${uikit.link} ${styles.button}`} onClick={togglePodcast}>
          {showPodcast ? 'скрыть' : 'слушать онлайн'}
        </button>
      </div>
      <Podcast.Collection
        className={className}
        feedUrl='./ocappella'
        podcastLink='https://radiooverdrive.mave.digital'
      />
    </Element>
  );
};

export default Ocapella;
