'use client'

import { useState, useEffect } from 'react'
import { Link, Events, animateScroll as scroll, scrollSpy } from 'react-scroll'

import styles from './header.module.scss'
import uikit from '../uikit.module.scss'
import MenuBurger from '../menuBurger/MenuBurger'

const Header = () => {
	useEffect(() => {
		Events.scrollEvent.register('begin', (to, element) => {
			console.log('begin', to, element)
		})
		Events.scrollEvent.register('end', (to, element) => {
			console.log('end', to, element)
		})
		scrollSpy.update()
		return () => {
			Events.scrollEvent.remove('begin')
			Events.scrollEvent.remove('end')
		}
	}, [])

	const handleSetActive = to => {
		console.log(to)
	}

	const [isOpen, setIsOpen] = useState(false)

	const handleOnOpen = () => {
		setIsOpen(!isOpen)
		console.log(isOpen)
	}

	return (
		<>
			<header
				id='outer-container'
				className={isOpen ? styles.container : styles.isOpen}
			>
				<nav className={styles.wrapper}>
					<ul className={styles.menu}>
						<li className={`${styles.menu_item} ${uikit.text8}`}>
							<Link
								activeClass='active'
								to='about'
								spy={true}
								smooth={true}
								offset={200}
								duration={500}
								onSetActive={handleSetActive}
							>
								о нас
							</Link>
						</li>
						<li className={`${styles.menu_item} ${uikit.text8}`}>
							<Link
								activeClass='active'
								to='presenters'
								spy={true}
								smooth={true}
								offset={-10}
								duration={500}
								onSetActive={handleSetActive}
							>
								ведущие
							</Link>
						</li>
						<li>
							<img src='logo.svg'></img>
						</li>
						<li className={`${styles.menu_item} ${uikit.text8}`}>
							<a href='#'>программа</a>
						</li>
						<li className={`${styles.menu_item} ${uikit.text8}`}>
							<a href='#'>слушать</a>
						</li>
					</ul>
				</nav>
				<MenuBurger
					isOpen={isOpen}
					onOpen={handleOnOpen}
					onClose={handleOnOpen}
				/>
			</header>
		</>
	)
}

export default Header
