import styles from './mail.module.scss'
import uikit from '../uikit.module.scss'

const Mail = () => {
	return (
		<section>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<h3 className={`${styles.title} ${uikit.title3}`}>
						МЫ ЖДЁМ ВАШИ ПИСЬМА
					</h3>
					<p className={`${styles.description} ${uikit.text2}`}>
						Пишите нам письма — если хотите с нами сотрудничать, быть
						волонтёром, прислать новый релиз, поделиться идеей программы,
						обратиться к ведущим и слушателям или просто так:
					</p>
					<p className={uikit.link_text2}>
						<a>radio@russiandino.ru</a>
					</p>
				</div>
			</div>
		</section>
	)
}

export default Mail
