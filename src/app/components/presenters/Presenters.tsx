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
			day: 'среды',
			name: 'Денис Никитенко',
			city: 'Санкт-Петербург',
			descriptionParagraph1:
				'Общий Овердруг. Старается не материться в эфире, иначе чем эфир будет отличаться от рабочей планерки?',
			descriptionParagraph2:
				'Обожает брать на себя побольше, а потом жаловаться на занятость. Когда нельзя путешествовать во времени и пространстве, заставляет окружающих слушать про Столетнюю войну и красоты Архангельской области. Любит повторять «Да и хрен со мной», но говорить так про Никитенко можно только ему. Верит в заговор книг, которые однажды скопятся в его жилье до критической массы и перепишут на себя комнату. Мечтает скрестить Аманду Палмер и Вертинского.',
			descriptionParagraph3: 'Характер мерцающе-присутствующий. Не женат.',
		},
		{
			id: 3,
			on: false,
			img: '/barnashov.png',
			day: 'четверга',
			name: 'Андрей Григорьев',
			city: 'Санкт-Петербург / Алматы',
			descriptionParagraph1:
				'Автор непоставленного мюзикла и недосведённого альбома. Человек, приятный в обхождении за версту.',
			descriptionParagraph2:
				'Однажды увидел девушку в футболке Harley Davidson и попросил её назвать «хотя бы одну их песню».',
			descriptionParagraph3:
				'Как некоторые бас-гитаристы, хорошо считает до четырех, поэтому в каждом его эфире 4 песни, а потом ещё 3.',
			descriptionParagraph4:
				'Несколько лет был уверен, что чай в пакетиках правильно называть «пакетивиризированным», а всем несогласным рассказывал анекдот про Ленина.',
			descriptionParagraph5:
				'Держал у себя дома стаю из пяти попугаев, трясогузку и зарянку. С тех пор любой разговор старается перевести в русло орнитологии.',
		},
		{
			id: 4,
			on: false,
			img: '/barnashov.png',
			day: 'субботы',
			name: 'Виталий Савченко',
			city: 'Омск',
			descriptionParagraph1:
				'За пределами Овердрайва является участником трёх музыкальных проектов и звукорежиссёром, а на радио пришёл, чтобы безнаказанно шалить, хулиганить и реализовывать свои безумные задумки',
			descriptionParagraph2:
				'В своих эфирах часто знакомит слушателя с малоизвестными жанрами. Мы не знаем, из каких источников Савченко берёт материал и существуют ли эти источники, но каждый его эфир — это остросюжетная история с неожиданной развязкой.',
			descriptionParagraph3:
				'Любимая еда — грибы (что бы это ни значило). Нелюбимая — печень. Любимая книга — «Человеческий Панк» Джона Кинга. Любимая игра — «Чёрное Зеркало». Фильм — «Асса». Аниме — «Евангелион». Сериал — «Секретные материалы». Любимый музыкант — Ник Кейв.',
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

	function leave(id: any) {
		setCardsBox(prevCardsBox => {
			return prevCardsBox.map(card => {
				return card.id === id
					? { ...card, on: card.on }
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
			descriptionParagraph4={card.descriptionParagraph4}
			descriptionParagraph5={card.descriptionParagraph5}
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
