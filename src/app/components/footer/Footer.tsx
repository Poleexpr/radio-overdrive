'use client'

import { ReactSVG } from 'react-svg'

import styles from './footer.module.scss'
import uikit from '../uikit.module.scss'
import Image from 'next/image'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.subcontainer_first}>
					<p className={uikit.title6}>Овердрайв</p>
					<div className={styles.nets_wrapper}>
						<div className={styles.mail_logo_wrapper}>
							<ReactSVG src='tg.svg' />
						</div>
						<div className={styles.mail_logo_wrapper}>
							<ReactSVG src='vk.svg' />
						</div>
						<div className={styles.mail_logo_wrapper}>
							<ReactSVG src='instagram.svg' />
						</div>
					</div>
				</div>
				<div className={styles.subcontainer_second}>
					<a href='#' className={styles.mail_link}>
						<div className={styles.mail_logo_wrapper}>
							<ReactSVG src='mail.svg' />
						</div>
						<p className={uikit.text}>radio@russiandino.ru</p>
					</a>

					<div className={styles.wrappe_copiright}>
						<p className={`${uikit.text} ${styles.heshtag}`}>#радиоовердрайв</p>
						<p className={uikit.text}>#хбдщдбдщ</p>
						<p className={`${uikit.title5} ${styles.slogan}`}>
							Мы вещаем до последнего
						</p>
						<p className={uikit.text}>
							© 2024 Радио Овердрайв. Санкт-Петербург. Все права защищены.
						</p>
					</div>
					<div className={styles.rd_wrapper}>
						<a className={styles.rd}>
							<ReactSVG src='rd-logo.svg' />

							<div className={styles.rd_text}>
								<p>made by</p>
								<p className={styles.rd_russkiy}>Russkiy</p>
								<p className={styles.rd_dinozavr}>Dinozavr</p>
							</div>
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
