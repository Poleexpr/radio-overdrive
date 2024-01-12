import styles from './wellcome.module.scss'
import uikit from '../uikit.module.scss'

const Wellcome = () => {
	return (
		<div className={styles.container}>
			<div className={styles.title_wrapper}>
				<p className={uikit.title}>это</p>
				<h1 className={`${styles.title} ${uikit.title2}`}>РАДИО Овердрайв</h1>
			</div>
			<div className={styles.description_container}>
				<div>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='120'
						height='120'
						viewBox='0 0 120 120'
						fill='none'
					>
						<path
							d='M120 60C120 93.1371 93.1371 120 60 120C26.8629 120 0 93.1371 0 60C0 26.8629 26.8629 0 60 0C93.1371 0 120 26.8629 120 60Z'
							fill='url(#paint0_linear_1922_84)'
						/>
						<path d='M87 60L46.5 83.3827L46.5 36.6173L87 60Z' fill='white' />
						<defs>
							<linearGradient
								id='paint0_linear_1922_84'
								x1='18'
								y1='-84.75'
								x2='140.072'
								y2='-63.4577'
								gradientUnits='userSpaceOnUse'
							>
								<stop stop-color='#9337D4' />
								<stop offset='1' stop-color='#5B31C0' />
							</linearGradient>
						</defs>
					</svg>
				</div>
				<a href='https://t.me/rocknword/11681' target='_blank'>
					<div>
						<div className={styles.donation_wrapper}>
							<p className={`${styles.donation} ${uikit.text5}`}>
								поддержать проект
							</p>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='60'
								height='57'
								viewBox='0 0 60 57'
								fill='none'
							>
								<path
									d='M49.2539 19.9512L57.7392 28.4365L49.2539 36.9217'
									stroke='white'
									stroke-width='2'
								/>
								<path
									d='M57.7421 28.4374H29.3047H0.867309'
									stroke='white'
									stroke-width='2'
								/>
							</svg>
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
		</div>
	)
}

export default Wellcome
