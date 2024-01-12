import type { Metadata } from 'next'
import Cocomat from 'next/font/local'
import MicraDi from 'next/font/local'
import './globals.scss'
import Header from './components/header/Header'

const micraDi = MicraDi({
	src: './fonts/micradi.ttf',
	variable: '--micraDi',
})

const cocomat = Cocomat({
	src: [
		{
			path: './fonts/Cocomat.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: './fonts/Cocomat-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
	],
	variable: '--cocomat',
})

export const metadata: Metadata = {
	title: 'радио Овердрайв',
	description: 'описание радио Овердрайв',
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
			</body>
		</html>
	)
}
