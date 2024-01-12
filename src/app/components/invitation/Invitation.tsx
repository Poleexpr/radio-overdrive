import styles from './invitation.module.scss'
import uikit from '../uikit.module.scss'

const Invitation = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.container}>
				<h3 className={`${uikit.title3} ${styles.title}`}>
					ХОЧЕШЬ СТАТЬ ВЕДУЩИМ РАДИО ОВЕРДРАЙВ?
				</h3>
				<p className={`${uikit.text2} ${styles.text}`}>
					Возможно, мы ищем именно тебя: неважно в какой точке Земли ты живёшь,
					если тебе есть что сказать, и ты врубаешь в высокий стиль, присылай
					демо-аудио и ссылку на свой плейлист на
				</p>
				<a>
					<p className={uikit.link_text}>radio@russiandino.ru</p>
				</a>
			</div>
		</section>
	)
}

export default Invitation
