'use client'

import Marquee from 'react-fast-marquee'

import { Typography } from '@/components'
import {
	IconArrowNextLong,
	IconButtonPlayText,
	IconEllipse,
} from '@/components/icons'

import uikit from '../uikit.module.scss'
import styles from './wellcome.module.scss'

const Welcome = () => {
	return (
		<div className={styles.wrapper}>
			<video
				autoPlay
				muted
				loop
				className={styles.video}
				src='./wellcomeBack.mp4'
				poster='./wellcomeBackPoster.jpg'
			></video>
			<div className={styles.container}>
				<div className={styles.title_wrapper}>
					<Typography tag='p' variant='title' className={styles.subtitle}>
						это
					</Typography>
					<Typography tag='h1' variant='title2' className={styles.title}>
						РАДИО Овердрайв
					</Typography>
				</div>
				<div className={styles.description_container}>
					<div>
						<a href='https://t.me/rocknword' target='_blank'>
							<IconButtonPlayText className={styles.playTgLink} />
						</a>
					</div>
					<a href='https://t.me/rocknword/11681' target='_blank'>
						<div>
							<div className={styles.donation_wrapper}>
								<Typography tag='p' variant='text5' className={styles.donation}>
									поддержать проект
								</Typography>
								<IconArrowNextLong />
							</div>
							<Typography tag='div' variant='text6' className={styles.slogan}>
								<p>Независимое радио без рекламы,</p>
								<p>ипотеки и средств против импотенции —</p>
							</Typography>

							<div
								className={`${styles.slogan_bold} ${uikit.text7} ${uikit.underline}`}
							>
								<p>такое возможно?</p>
								<p>Да, благодаря твоим донатам!</p>
							</div>
						</div>
					</a>
				</div>
				<Marquee autoFill>
					<p className={uikit.marqueeContent}>мы вещаем до последнего</p>
					<IconEllipse className={styles.ellipse} />
				</Marquee>
			</div>
		</div>
	)
}

export default Welcome
