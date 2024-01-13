'use client'
import { useState } from 'react'
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
								{post.title}
							</h4>
							<div className={`${uikit.text} ${styles.content}`}>
								{post.content}
							</div>
							<div className={styles.audioPlayer}>
								<audio className='audio' controls src={post.enclosure.url}>
									<source src={post.enclosure.url}></source>
									Ваш браузер не поддерживает audio тег.
								</audio>
								<div className={styles.controls}>
									<button onClick={playAudio}>
										{isPlaying ? 'Play' : 'Stop'}
									</button>
									<input
										type='range'
										min='0'
										max='1'
										step='0.01'
										value='1'
									></input>
								</div>
								<div className={styles.progress}>
									<div className={styles.progressBar}></div>
								</div>
								<div>0:00</div>
								<div>0:00</div>
							</div>
						</div>
					</li>
				)
			})}
		</ul>
	)
}
export default PodcastCard
