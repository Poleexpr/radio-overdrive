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
							<Image
								className={`${styles.mail_logo} ${styles.tg_logo}`}
								src='/tg.svg'
								alt='telegram logo'
								width={35.11}
								height={30.53}
								priority
							/>
						</div>
						<div className={styles.mail_logo_wrapper}>
							<Image
								className={`${styles.mail_logo} ${styles.vk_logo}`}
								src='/vk.svg'
								alt='vk logo'
								width={35}
								height={22}
								priority
							/>
						</div>
						<div className={styles.mail_logo_wrapper}>
							<Image
								className={styles.mail_logo}
								src='/insta.svg'
								alt='instagram logo'
								width={33}
								height={33}
								priority
							/>
						</div>
					</div>
				</div>
				<div className={styles.subcontainer_second}>
					<a href='#' className={styles.mail_link}>
						<div className={styles.mail_logo_wrapper}>
							<Image
								className={styles.mail_logo}
								src='/mail.svg'
								alt='mail logo'
								width={35}
								height={23}
								priority
							/>
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
							<Image
								className={styles.mail_logo}
								src='/rd-logo.svg'
								alt='rd logo'
								width={37}
								height={70}
								priority
							/>
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
