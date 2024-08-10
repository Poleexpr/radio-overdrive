'use client';

import { useState } from 'react';

import { Loader } from '@/components';

import styles from './videoWelcome.module.scss';

export const VideoWelcome = () => {
  const [isCanPlay, setIsCanPlay] = useState(false);

  const handleIsCanPlay = () => {
    setIsCanPlay(!isCanPlay);
  };

  if (!isCanPlay) {
    setTimeout(() => {
      setIsCanPlay(!isCanPlay);
    }, 1000);
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
        onPlay={handleIsCanPlay}
      />
    </>
  );
};
