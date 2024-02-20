'use client';

import type { FC } from 'react';
import { useEffect, useState } from 'react';
import Parser from 'rss-parser';

import { IconArrowDown } from '@/components/icons';

import uikit from '../../uikit.module.scss';
import PodcastCard from '../podcastCard/PodcastCard';

import styles from './podcastCollection.module.scss';

interface PodcastCollectionProps {
  feedUrl: string;
  className: string;
  podcastLink: string;
}

interface Items {
  title: string;
  contentSnippet: string;
  isoDate: string;
  itunes: { image: string };
  enclosure: { url: string };
}

const parser: Parser = new Parser();

const filterPosts = (items: Items[], limit: number) => items.slice(0, limit);

const PodcastCollection: FC<PodcastCollectionProps> = ({ feedUrl, className, podcastLink }) => {
  const [episodes, setEpisodes] = useState<Items[]>([]);

  useEffect(() => {
    const fetchEpisodes = async () => {
      const feed = await parser.parseURL(feedUrl);
      const blogPosts = filterPosts(feed.items, 3);
      setEpisodes(blogPosts);
    };
    fetchEpisodes();
  }, []);

  return (
    <div className={className}>
      <PodcastCard posts={episodes} />
      <div className={styles.link_container}>
        <a className={styles.link_wrapper} href={podcastLink} rel='noreferrer' target='_blank'>
          <p className={uikit.text5}>ещё выпуски </p>
          <IconArrowDown />
        </a>
      </div>
    </div>
  );
};

export default PodcastCollection;
