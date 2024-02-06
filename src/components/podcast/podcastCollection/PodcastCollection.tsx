'use client';

import { useEffect, useState } from 'react';
import Parser from 'rss-parser';

import { IconArrowDown } from '@/components/icons';

import uikit from '../../uikit.module.scss';
import { default as PodcastCard } from '../podcastCard/PodcastCard';

import styles from './podcastCollection.module.scss';

const PodcastCollection = (props: any) => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    type CustomFeed = { foo: string };
    type CustomItem = { bar: any };

    const parser: Parser<CustomFeed, CustomItem> = new Parser({
      customFields: {
        feed: ['foo'],
        item: ['bar'],
      },
    });

    const filterPosts = (items: any, limit: number) => items.slice(0, limit);

    const fetchEpisodes = async () => {
      const feed = await parser.parseURL(props.feedUrl);
      const blogPosts = filterPosts(feed.items, 3);
      setEpisodes(blogPosts);
    };
    fetchEpisodes();
  }, []);

  return (
    <div style={props.podcastStyle}>
      <PodcastCard posts={episodes} />
      <div className={styles.link_container}>
        <a
          className={styles.link_wrapper}
          href={props.podcastLink}
          rel='noreferrer'
          target='_blank'
        >
          <p className={uikit.text5}>ещё выпуски </p>
          <IconArrowDown />
        </a>
      </div>
    </div>
  );
};

export default PodcastCollection;
