'use client';

import { useState } from 'react';

import { Loader } from '@/components';

import styles from './videoWelcome.module.scss';

export const VideoWelcome = () => {
  // eslint-disable-next-line prefer-const
  let [isCanPlay, setIsCanPlay] = useState(false);

  const handleIsCanPlay = () => {
    setIsCanPlay((isCanPlay = true));
  };

  if (!isCanPlay) {
    setTimeout(() => {
      setIsCanPlay((isCanPlay = true));
    }, 3000);
  }

  return (
    <>
      {!isCanPlay && <Loader />}
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.video}
        poster='./videos/wellcomeBackPoster.webp'
        src='./videos/wellcomeBack.mp4'
        onCanPlay={handleIsCanPlay}
      />
    </>
  );
};
