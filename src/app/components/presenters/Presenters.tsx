'use client'

import React, { useState } from 'react'
import { Element } from 'react-scroll'

import Image from 'next/image'
import styles from './presenters.module.scss'
import uikit from '../uikit.module.scss'

import PresentersCard from '../presentersCard/PresentersCard'

const Presenters = () => {
	const cards = [
		{
			id: 1,
			on: true,
			img: '/barnashov.png',
			day: 'понедельника',
			name: 'Павел Барнашов',
			city: 'Саранск',
			descriptionParagraph1:
				'Заслуженный пращур Республики Мордовии, доктор болтологических наук. Отчаянно пытается быть брутальным, чтобы избавиться от романтического образа. Образ не сдаётся.',
			descriptionParagraph2:
				'Говорить может часами, особенно про Дэвида Боуи. Из списка «Новинки» до сих пор не удалил релизы 2006 года.',
			descriptionParagraph3:
				'Пришёл на радио, потому что ушёл с телевидения. Ставит музыку, которая сегодня играет на нём особенно громко.',
		},
		{
			id: 2,
			on: false,
			img: '/barnashov.png',
			day: 'понедельника',
			name: 'Павел Барнашов',
			city: 'Саранск',
			descriptionParagraph1:
				'Заслуженный пращур Республики Мордовии, доктор болтологических наук. Отчаянно пытается быть брутальным, чтобы избавиться от романтического образа. Образ не сдаётся.',
			descriptionParagraph2:
				'Говорить может часами, особенно про Дэвида Боуи. Из списка «Новинки» до сих пор не удалил релизы 2006 года.',
			descriptionParagraph3:
				'Пришёл на радио, потому что ушёл с телевидения. Ставит музыку, которая сегодня играет на нём особенно громко.',
		},
		{
			id: 3,
			on: false,
			img: '/barnashov.png',
			day: 'понедельника',
			name: 'Павел Барнашов',
			city: 'Саранск',
			descriptionParagraph1:
				'Заслуженный пращур Республики Мордовии, доктор болтологических наук. Отчаянно пытается быть брутальным, чтобы избавиться от романтического образа. Образ не сдаётся.',
			descriptionParagraph2:
				'Говорить может часами, особенно про Дэвида Боуи. Из списка «Новинки» до сих пор не удалил релизы 2006 года.',
			descriptionParagraph3:
				'Пришёл на радио, потому что ушёл с телевидения. Ставит музыку, которая сегодня играет на нём особенно громко.',
		},
		{
			id: 4,
			on: false,
			img: '/barnashov.png',
			day: 'понедельника',
			name: 'Павел Барнашов',
			city: 'Саранск',
			descriptionParagraph1:
				'Заслуженный пращур Республики Мордовии, доктор болтологических наук. Отчаянно пытается быть брутальным, чтобы избавиться от романтического образа. Образ не сдаётся.',
			descriptionParagraph2:
				'Говорить может часами, особенно про Дэвида Боуи. Из списка «Новинки» до сих пор не удалил релизы 2006 года.',
			descriptionParagraph3:
				'Пришёл на радио, потому что ушёл с телевидения. Ставит музыку, которая сегодня играет на нём особенно громко.',
		},
	]

	const [cardsBox, setCardsBox] = React.useState(cards)

	function toggle(id: any) {
		setCardsBox(prevCardsBox => {
			return prevCardsBox.map(card => {
				return card.id === id
					? { ...card, on: !card.on }
					: { ...card, on: false }
			})
		})
	}

	const cardElements = cardsBox.map(card => (
		<PresentersCard
			key={card.id}
			id={card.id}
			on={card.on}
			toggle={toggle}
			img={card.img}
			day={card.day}
			name={card.name}
			city={card.city}
			descriptionParagraph1={card.descriptionParagraph1}
			descriptionParagraph2={card.descriptionParagraph2}
			descriptionParagraph3={card.descriptionParagraph3}
		/>
	))

	return (
		<Element name='presenters' className='element'>
			<section>
				<div className={styles.container}>
					<h2 className={uikit.title2}>Ведущие</h2>
					<div className={styles.cards_container}>{cardElements}</div>
				</div>
			</section>
		</Element>
	)
}

export default Presenters
