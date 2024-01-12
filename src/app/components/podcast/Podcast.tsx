'use client'

import React, { useEffect, useState } from 'react'

import styles from './podcast.module.scss'
import uikit from '../uikit.module.scss'

import PodcastCard from '../podcastCard/PodcastCard'
import Parser from 'rss-parser'

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
			const feed = await parser.parseURL('http://localhost:3000/ocappella')
			console.log(feed.items) // feed will have a `foo` property, type as a string
			feed.items.forEach(item => {
				console.log(
					item.title +
						':' +
						item.content +
						'item.enclosure.url' +
						item.pubDate +
						'item.itunes.image'
				) // item will have a `bar` property type as a number
			})
			const blogPosts = filterPosts(feed.items, 3)
			setEpisodes(blogPosts)
		}
		fetchEpisodes()
	}, [])

	return (
		<div style={props.podcastStyle}>
			<PodcastCard posts={episodes} />
		</div>
	)
}

export default Podcast
