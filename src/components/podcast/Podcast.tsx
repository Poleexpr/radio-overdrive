'use client'

import React, { useEffect, useState } from 'react'
import Parser from 'rss-parser'

import { IconArrowDown } from '@/components/icons'

import PodcastCard from '../podcastCard/PodcastCard'
import uikit from '../uikit.module.scss'
import styles from './podcast.module.scss'

const Podcast = (props: any) => {
	const [episodes, setEpisodes] = useState([])

	useEffect(() => {
		type CustomFeed = { foo: string }
		type CustomItem = { bar: any }

		const parser: Parser<CustomFeed, CustomItem> = new Parser({
			customFields: {
				feed: ['foo'],
				item: ['bar'],
			},
		})

		const filterPosts = (items: any, limit: number) => {
			return items.slice(0, limit)
		}

		const fetchEpisodes = async () => {
			const feed = await parser.parseURL(props.feedUrl)
			const blogPosts = filterPosts(feed.items, 3)
			setEpisodes(blogPosts)
		}
		fetchEpisodes()
	}, [])

	return (
		<div style={props.podcastStyle}>
			<PodcastCard posts={episodes} />
			<div className={styles.link_container}>
				<a
					href={props.podcastLink}
					target='_blank'
					className={styles.link_wrapper}
				>
					<p className={uikit.text5}>ещё выпуски </p>
					<IconArrowDown />
				</a>
			</div>
		</div>
	)
}

export default Podcast
