'use client';

import Image from 'next/image';
import Marquee from 'react-fast-marquee';

import { Podcast, Typography, ButtonRectangle } from '@/components';
import { useTogglePodcast } from '@/utils';

import styles from './bannerSections.module.scss';

export const ALiensBannerSection = () => {
  const [showPodcast, togglePodcast] = useTogglePodcast(false);

  const className = showPodcast ? styles.showPodcast : styles.hidePodcast;

  return (
    <section className={styles.aliens}>
      <div className={styles.wrapper}>
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

        <div className={styles.container}>
          <Typography tag='h2' variant='title2'>
            пришельцы
          </Typography>
          <Typography className={styles.description} tag='p' variant='text2'>
            Прямые эфиры с музыкантами, писателями, философами и другими гостями не от мира сего.
          </Typography>
          <ButtonRectangle className={styles.button} onClick={() => togglePodcast()}>
            {showPodcast ? 'скрыть' : 'слушать онлайн'}
          </ButtonRectangle>
        </div>
        <Podcast.Collection
          className={className}
          feedUrl='./ocappella'
          podcastLink='https://radiooverdrive.mave.digital'
        />
      </div>
    </section>
  );
};
