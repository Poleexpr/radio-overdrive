'use client'

import Image from 'next/image'
import { useState } from 'react'
import Marquee from 'react-fast-marquee'

import { Podcast } from '@/components'

import uikit from '../uikit.module.scss'
import styles from './aliens.module.scss'

const Aliens = () => {
	const [showPodcast, setShowPodcast] = useState(false)

	const togglePodcast = () => {
		setShowPodcast(!showPodcast)
	}

	const styleDisplayPodcast = showPodcast
		? { display: 'block' }
		: { display: 'none' }

	return (
		<section className={styles.container}>
			<Image
				className={styles.aliensShadowTopImg}
				src='/aliensShadowTop.png'
				alt=''
				layout='responsive'
				width={1000}
				height={1000}
			/>
			<Marquee autoFill className={styles.marquee}>
				<Image
					className={styles.img}
					src='/aliensBack.png'
					alt=''
					layout='responsive'
					width={1000}
					height={1000}
				/>
			</Marquee>
			<Image
				className={styles.aliensShadowBottomImg}
				src='/aliensShadowBottom.png'
				alt=''
				layout='responsive'
				width={1000}
				height={1000}
			/>

			<div className={styles.info_container}>
				<h2 className={uikit.title2}>пришельцы</h2>
				<p className={`${styles.description} ${uikit.text2}`}>
					Прямые эфиры с музыкантами, писателями, философами и другими гостями
					не от мира сего.
				</p>
				<button
					onClick={togglePodcast}
					className={`${uikit.link} ${styles.button}`}
				>
					{showPodcast ? 'скрыть' : 'слушать онлайн'}
				</button>
			</div>
			<Podcast.Collection
				feedUrl={'./ocappella'}
				podcastLink={'https://radiooverdrive.mave.digital'}
				podcastStyle={styleDisplayPodcast}
			/>
		</section>
	)
}

export default Aliens