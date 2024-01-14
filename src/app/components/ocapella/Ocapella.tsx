'use client'

import React, { useState } from 'react'

import styles from './ocapella.module.scss'
import uikit from '../uikit.module.scss'

import Podcast from '../podcast/Podcast'

const Ocapella = () => {
	// кнопка будет менять состяние с false на true
	// а класс в подкаст будет передаваться в зависимости от состояния
	const [showPodcast, setShowPodcast] = useState(false)

	const togglePodcast = () => {
		setShowPodcast(!showPodcast)
	}

	const styleDisplayPodcast = showPodcast
		? { display: 'block' }
		: { display: 'none' }

	return (
		<>
			<div className={styles.container}>
				<h2 className={uikit.title2}>о’капелла</h2>
				<p className={`${styles.description} ${uikit.text2}`}>Подкаст о музыке как феномене и чуде.</p>
				<button
					onClick={togglePodcast}
					className={`${uikit.link} ${styles.button}`}
				>
					слушать онлайн
				</button>
			</div>
			<Podcast podcastStyle={styleDisplayPodcast} />
		</>
	)
}

export default Ocapella
