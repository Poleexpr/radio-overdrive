'use client'
import { useState } from 'react'
import AudioPlayer from 'react-h5-audio-player'
import styles from './podcastCard.module.scss'
import uikit from '../uikit.module.scss'
import Image from 'next/image'

const PodcastCard = ({ posts = [] }) => {
	const [isPlaying, setIsPlaying] = useState(false)

	const playAudio = () => {
		const audios = Array.from(document.getElementsByClassName('audio'))
		audios.map(audio => {
			if (isPlaying) {
				audio.pause()
			} else {
				audio.play()
			}
		})
	}

	return (
		<ul className={styles.wrapper}>
			{posts.map((post, i) => {
				console.log(post, i)
				return (
					<li key={i} className={styles.container}>
						<div className={styles.wrapper_cover}>
							<img className={styles.cover} src={post.itunes.image} />
						</div>
						<div className={styles.container_info}>
							<div className={`${uikit.text4} ${styles.date}`}>
								{post.pubDate}
							</div>
							<h4 className={`${uikit.title5} ${styles.title}`}>
								{post.title.slice(post.title.indexOf('#'))}
							</h4>
							<div className={`${uikit.text} ${styles.content}`}>
								{post.content}
							</div>
							<AudioPlayer
								src={post.enclosure.url}
								onPlay={e => console.log('onPlay')}
								// other props here
							/>
						</div>
					</li>
				)
			})}
		</ul>
	)
}
export default PodcastCard
