import styles from './header.module.scss'
import uikit from '../uikit.module.scss'

const Header = () => {
	return (
		<header className={styles.container}>
			<nav className={styles.wrapper}>
				<ul className={styles.menu}>
					<li className={`${styles.menu_item} ${uikit.text8}`}>
						<a href='#about'>о нас</a>
					</li>
					<li className={`${styles.menu_item} ${uikit.text8}`}>
						<a href='#presenters'>ведущие</a>
					</li>
					<li>
						<img src='logo.svg'></img>
					</li>
					<li className={`${styles.menu_item} ${uikit.text8}`}>
						<a href='#program'>программа</a>
					</li>
					<li className={`${styles.menu_item} ${uikit.text8}`}>
						<a href='#'>слушать</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
