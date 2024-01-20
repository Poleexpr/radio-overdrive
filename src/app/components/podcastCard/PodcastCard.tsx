'use client'
import { useState } from 'react'
import AudioPlayer from 'react-h5-audio-player'
import styles from './podcastCard.module.scss'
import uikit from '../uikit.module.scss'
import Image from 'next/image'
import { ReactSVG } from 'react-svg'

const PodcastCard = ({ posts = [] }) => {
	const [isPlaying, setIsPlaying] = useState(false)
	/*
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
*/

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
							<div className={`${uikit.text} ${styles.date}`}>
								{post.isoDate.slice(0, 10).split('-').reverse().join('.')}
							</div>
							<h4 className={`${uikit.title5} ${styles.title}`}>
								{post.title.slice(post.title.indexOf('#'))}
							</h4>
							<div className={`${uikit.text} ${styles.content}`}>
								{post.contentSnippet}
							</div>
							<AudioPlayer
								src={post.enclosure.url}
								onPlay={e => console.log('onPlay')}
								layout='horizontal-reverse'
								showJumpControls={false}
								customVolumeControls={[]}
								customAdditionalControls={[]}
								showDownloadProgress={false}
								customIcons={{
									play: <ReactSVG src='play.svg' />,
								}}
							/>
						</div>
					</li>
				)
			})}
		</ul>
	)
}
export default PodcastCard
