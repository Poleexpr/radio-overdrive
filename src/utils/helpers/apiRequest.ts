import { nanoid } from 'nanoid';
import Parser from 'rss-parser';

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

// const filterPosts = (items: Items[], limit: number) => items.slice(0, limit);

export const fetchEpisodes = async (rss: string) => {
  const feed = await parser.parseURL(rss);
  console.log(feed.items);
  const episodes = feed.items.map((item) => ({
    name: item.title,
    date: item.isoDate,
    cover: item.itunes.image,
    description: item.contentSnippet,
    audio: item.enclosure.url,
    id: nanoid(),
    active: false,
  }));

  return episodes;
};
