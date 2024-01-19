'use client'

import { ReactSVG } from 'react-svg'
import Marquee from 'react-fast-marquee'

import styles from './wellcome.module.scss'
import uikit from '../uikit.module.scss'

const Wellcome = () => {
	return (
		<div className={styles.container}>
			<div className={styles.title_wrapper}>
				<p className={`${styles.subtitle} ${uikit.title}`}>это</p>
				<h1 className={`${styles.title} ${uikit.title2}`}>РАДИО Овердрайв</h1>
			</div>
			<div className={styles.description_container}>
				<div>
					<a href='https://t.me/rocknword' target='_blank'>
						<ReactSVG className={styles.playTgLink} src='playTgLink.svg' />
					</a>
				</div>
				<a href='https://t.me/rocknword/11681' target='_blank'>
					<div>
						<div className={styles.donation_wrapper}>
							<p className={`${styles.donation} ${uikit.text5}`}>
								поддержать проект
							</p>
							<ReactSVG src='arrow.svg' />
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
				<ReactSVG className={styles.ellipse} src='ellipse.svg' />
			</Marquee>
		</div>
	)
}

export default Wellcome
