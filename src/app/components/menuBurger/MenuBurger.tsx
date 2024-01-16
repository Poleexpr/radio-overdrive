import { elastic as Menu } from 'react-burger-menu'

import styles from './menuBurger.module.scss'

const MenuBurger = () => {
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

	return (
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
	)
}

export default MenuBurger
