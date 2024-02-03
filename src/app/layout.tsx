import './globals.scss'

import type { Metadata } from 'next'

import { cocomat, micraDi } from '@/fonts'

import Header from '../components/header/Header'
import Radio from '../components/radio/Radio'

export const metadata: Metadata = {
	title: 'радио Овердрайв',
	description:
		'Семь ведущих из разных городов Земли ставят музыку высокого стиля прямо с космической станции. И помни — мы вещаем до последнего.',
	keywords: [
		'интернет-радио',
		'новая музыка',
		'топовые треки',
		'рок',
		'инди-музыка',
		'андеграунд',
	],
	openGraph: {
		images: '/og-image.png',
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={`${cocomat.variable} ${micraDi.variable}`}>
				<Header />
				{children}
				<Radio />
			</body>
		</html>
	)
}
