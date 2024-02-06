'use client'
import { useState } from 'react'
import AudioPlayer from 'react-h5-audio-player'
//import typograf from '/Users/mac/Desktop/radioOverdriveApp/radio-overdrive/node_modules/Typograf/dist/typograf'
import typograf from 'typograf'

import { Typography } from '@/components'
import { IconButtonPlay } from '@/components/icons'

import styles from './podcastCard.module.scss'

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

	interface Post {
		title: string
		contentSnippet: string
		isoDate: string
		itunes: {
			image: string
		}
		enclosure: {
			url: string
		}
	}

	const tp = new typograf({ locale: ['ru', 'en-US'] })

	return (
		<ul className={styles.wrapper}>
			{posts.map((post: Post, i) => {
				return (
					<li key={i} className={styles.container}>
						<div className={styles.wrapper_cover}>
							<img className={styles.cover} src={post.itunes.image} />
						</div>
						<div className={styles.container_info}>
							<Typography tag='p' variant='text' className={styles.date}>
								{post.isoDate.slice(0, 10).split('-').reverse().join('.')}
							</Typography>
							<Typography tag='h4' variant='title5' className={styles.title}>
								{post.title.slice(post.title.indexOf('#'))}
							</Typography>
							<Typography tag='p' variant='text' className={styles.content}>
								{tp.execute(post.contentSnippet)}
							</Typography>
							<AudioPlayer
								src={post.enclosure.url}
								onPlay={e => console.log('onPlay')}
								layout='horizontal-reverse'
								showJumpControls={false}
								customVolumeControls={[]}
								customAdditionalControls={[]}
								showDownloadProgress={false}
								customIcons={{
									play: <IconButtonPlay />,
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
