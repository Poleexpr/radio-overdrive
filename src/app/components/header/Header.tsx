'use client'

import { useState, useEffect } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link, Events, animateScroll as scroll, scrollSpy } from 'react-scroll'
import { ReactSVG } from 'react-svg'

import styles from './header.module.scss'
import uikit from '../uikit.module.scss'

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
		if (!isOpen) {
			document.body.setAttribute('style', 'overflow: hidden; position: fixed;')
		} else {
			document.body.setAttribute(
				'style',
				'overflow: visible; position: static;'
			)
		}
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
							<ReactSVG src='logo.svg' />
						</li>
						<li className={`${styles.menu_item} ${uikit.text8}`}>
							<a href='#'>программа</a>
						</li>
						<li className={`${styles.menu_item} ${uikit.text8}`}>
							<a href='#'>слушать</a>
						</li>
					</ul>
				</nav>
				<div className={styles.logoMobile_wrapper}>
					<ReactSVG className={styles.logoMobile} src='logo.svg' />
				</div>
				<Menu
					right
					isOpen={isOpen}
					onOpen={handleOnOpen}
					onClose={handleOnOpen}
					pageWrapId={'page-wrap'}
					customBurgerIcon={<img src='./burgerIcon.svg' />}
					customCrossIcon={<img src='./crossIcon.svg' />}
					width={'100%'}
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
