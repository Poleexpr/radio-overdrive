'use client';

import Image from 'next/image';
import { useState } from 'react';
import Marquee from 'react-fast-marquee';

import { Podcast } from '@/components';

import uikit from '../uikit.module.scss';

import styles from './aliens.module.scss';

const Aliens = () => {
  const [showPodcast, setShowPodcast] = useState(false);

  const togglePodcast = () => {
    setShowPodcast(!showPodcast);
  };

  const styleDisplayPodcast = showPodcast ? { display: 'block' } : { display: 'none' };

  return (
    <section className={styles.container}>
      <Image
        alt=''
        className={styles.aliensShadowTopImg}
        height={1000}
        layout='responsive'
        src='/aliensShadowTop.png'
        width={1000}
      />
      <Marquee autoFill className={styles.marquee}>
        <Image
          alt=''
          className={styles.img}
          height={1000}
          layout='responsive'
          src='/aliensBack.png'
          width={1000}
        />
      </Marquee>
      <Image
        alt=''
        className={styles.aliensShadowBottomImg}
        height={1000}
        layout='responsive'
        src='/aliensShadowBottom.png'
        width={1000}
      />

      <div className={styles.info_container}>
        <h2 className={uikit.title2}>пришельцы</h2>
        <p className={`${styles.description} ${uikit.text2}`}>
          Прямые эфиры с музыкантами, писателями, философами и другими гостями не от мира сего.
        </p>
        <button className={`${uikit.link} ${styles.button}`} onClick={togglePodcast}>
          {showPodcast ? 'скрыть' : 'слушать онлайн'}
        </button>
      </div>
      <Podcast.Collection
        feedUrl='./ocappella'
        podcastLink='https://radiooverdrive.mave.digital'
        podcastStyle={styleDisplayPodcast}
      />
    </section>
  );
};

export default Aliens;
