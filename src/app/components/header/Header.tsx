'use client'

import { useState, useEffect } from 'react'
import { elastic as Menu } from 'react-burger-menu'
import { Link, Events, animateScroll as scroll, scrollSpy } from 'react-scroll'

import styles from './header.module.scss'
import uikit from '../uikit.module.scss'

const Header = () => {
	var nativeStyles = {
		bmBurgerButton: {
			position: 'fixed',
			width: '36px',
			height: '30px',
			right: '36px',
			top: '36px',
		},
		bmBurgerBars: {
			background: '#373a47',
		},
		bmBurgerBarsHover: {
			background: '#a90000',
		},
		bmCrossButton: {
			height: '24px',
			width: '24px',
		},
		bmCross: {
			background: '#bdc3c7',
		},
		bmMenuWrap: {
			position: 'fixed',
			height: '100%',
			top: '0',
		},
		bmMenu: {
			background: '#373a47',
			padding: '2.5em 1.5em 0',
			fontSize: '1.15em',
		},
		bmMorphShape: {
			fill: '#373a47',
		},
		bmItemList: {
			color: '#b8b7ad',
			padding: '0.8em',
			display: 'flex',
			flexDirection: 'column',
		},
		bmItem: {
			display: 'inline-block',
		},
		bmOverlay: {
			background: 'rgba(0, 0, 0, 0.3)',
		},
	}

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
	}

	return (
		<>
			<header
				id='outer-container'
				className={isOpen ? styles.isOpen : styles.container}
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
				<Menu
					right
					isOpen={isOpen}
					onOpen={handleOnOpen}
					onClose={handleOnOpen}
					customBurgerIcon={<img src='./burgerIcon.svg' />}
					customCrossIcon={<img src='./crossIcon.svg' />}
					styles={nativeStyles}
					className={styles.menuBurger}
				>
					<Link
						className='menu-item'
						activeClass='active'
						to='about'
						spy={true}
						smooth={true}
						offset={200}
						duration={500}
						onSetActive={handleSetActive}
						onClick={handleOnOpen}
					>
						о нас
					</Link>
					<Link
						className='menu-item'
						activeClass='active'
						to='presenters'
						spy={true}
						smooth={true}
						offset={-10}
						duration={500}
						onSetActive={handleSetActive}
						onClick={handleOnOpen}
					>
						ведущие
					</Link>
					<a className='menu-item' href='/'>
						Home
					</a>
					<a className='menu-item' href='/salads'>
						Salads
					</a>
					<a className='menu-item' href='/pizzas'>
						Pizzas
					</a>
					<a className='menu-item' href='/desserts'>
						Desserts
					</a>
				</Menu>
			</header>
		</>
	)
}

export default Header
