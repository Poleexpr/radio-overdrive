'use client'

import React, { useState } from 'react'
import { Element } from 'react-scroll'

import { Typography } from '@/components'

import Podcast from '../podcast/Podcast'
import uikit from '../uikit.module.scss'
import styles from './ocapella.module.scss'

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
			<Element name='program' className='element'>
				<div className={styles.container}>
					<Typography tag='h2' variant='title2'>
						о’капелла
					</Typography>
					<Typography tag='p' variant='text2' className={styles.description}>
						{' '}
						Подкаст о музыке как феномене и чуде.
					</Typography>
					<button
						onClick={togglePodcast}
						className={`${uikit.link} ${styles.button}`}
					>
						{showPodcast ? 'скрыть' : 'слушать онлайн'}
					</button>
				</div>
				<Podcast
					feedUrl={'./ocappella'}
					podcastLink={'https://radiooverdrive.mave.digital'}
					podcastStyle={styleDisplayPodcast}
				/>
			</Element>
		</>
	)
}

export default Ocapella
