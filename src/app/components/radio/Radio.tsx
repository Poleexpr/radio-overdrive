'use client'
import { useEffect,useState } from 'react'

import uikit from '../uikit.module.scss'
import styles from './radio.module.scss'

const Radio = () => {
	const [stream, setStream] = useState('')

	useEffect(() => {
		const getStream = async () => {
			const rec = await fetch(
				'https://demo.azuracast.com/api/nowplaying_static/azuratest_radio.json'
			)
			const data = await rec.json()
			console.log(data)
			setStream(data)
		}
		getStream()
	}, [])

	return (
		<section>
			<div></div>
		</section>
	)
}

export default Radio
