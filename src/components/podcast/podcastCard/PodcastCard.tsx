'use client';

import type { FC } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import Typograf from 'typograf';

import { Typography } from '@/components';
import { IconButtonPlay } from '@/components/icons';

import styles from './podcastCard.module.scss';

const tp = new Typograf({ locale: ['ru', 'en-US'] });

interface PodcastCardProps {
  posts: {
    title: string;
    contentSnippet: string;
    isoDate: string;
    itunes: {
      image: string;
    };
    enclosure: {
      url: string;
    };
  }[];
}

const PodcastCard: FC<PodcastCardProps> = ({ posts }) => (
  <ul className={styles.wrapper}>
    {posts.map((post, i) => (
      <li key={i} className={styles.container}>
        <div className={styles.wrapper_cover}>
          <img
            alt={post.title.slice(post.title.indexOf('#'))}
            className={styles.cover}
            src={post.itunes.image}
          />
        </div>
        <div className={styles.container_info}>
          <Typography className={styles.date} tag='p' variant='text'>
            {post.isoDate.slice(0, 10).split('-').reverse().join('.')}
          </Typography>
          <Typography className={styles.title} tag='h4' variant='title5'>
            {post.title.slice(post.title.indexOf('#'))}
          </Typography>
          <Typography className={styles.content} tag='p' variant='text'>
            {tp.execute(post.contentSnippet)}
          </Typography>
          <AudioPlayer
            customAdditionalControls={[]}
            customVolumeControls={[]}
            layout='horizontal-reverse'
            showDownloadProgress={false}
            showJumpControls={false}
            src={post.enclosure.url}
            customIcons={{
              play: <IconButtonPlay />,
            }}
          />
        </div>
      </li>
    ))}
  </ul>
);

export default PodcastCard;
