'use client';

import type { FC } from 'react';
import { use } from 'react';
import Parser from 'rss-parser';

import { Typography } from '@/components';
import { IconArrowDown } from '@/components/icons';

import PodcastCard from '../podcastCard/PodcastCard';

import styles from './podcastCollection.module.scss';

interface PodcastCollectionProps {
  feedUrl: string;
  className?: string;
  podcastLink: string;
}

interface Items {
  title: string;
  contentSnippet: string;
  isoDate: string;
  itunes: { image: string };
  enclosure: { url: string };
}

interface Feed {
  items: Items[];
}

const parser: Parser<Feed> = new Parser();

const filterPosts = (items: Items[], limit: number) => items.slice(0, limit);

const fetchEpisodes = async (feedUrl: string) => {
  const feed = await parser.parseURL(feedUrl);
  return feed.items;
};

const PodcastCollection: FC<PodcastCollectionProps> = ({ feedUrl, className, podcastLink }) => {
  const episodesAll = use(fetchEpisodes(feedUrl));
  const episodes = filterPosts(episodesAll, 3);

  return (
    <div className={className}>
      <PodcastCard posts={episodes} />
      <div className={styles.link_container}>
        <a className={styles.link_wrapper} href={podcastLink} rel='noreferrer' target='_blank'>
          <Typography tag='p' variant='text5'>
            ещё выпуски
          </Typography>
          <IconArrowDown />
        </a>
      </div>
    </div>
  );
};

export default PodcastCollection;
