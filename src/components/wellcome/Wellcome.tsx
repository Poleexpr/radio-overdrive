'use client'

import Marquee from 'react-fast-marquee'

import { IconArrowNextLong, IconButtonPlayText, IconEllipse } from '@/components/icons'

import uikit from '../uikit.module.scss'
import styles from './wellcome.module.scss'

const Wellcome = () => {
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
					<p className={`${styles.subtitle} ${uikit.title}`}>это</p>
					<h1 className={`${styles.title} ${uikit.title2}`}>РАДИО Овердрайв</h1>
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
								<p className={`${styles.donation} ${uikit.text5}`}>
									поддержать проект
								</p>
								<IconArrowNextLong />
							</div>

							<div className={`${styles.slogan} ${uikit.text6}`}>
								<p>Независимое радио без рекламы,</p>
								<p>ипотеки и средств против импотенции —</p>
							</div>

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

export default Wellcome
