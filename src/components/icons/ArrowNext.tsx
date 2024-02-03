import { ComponentPropsWithRef, FC } from 'react'

export const ArrowNext: FC<ComponentPropsWithRef<'svg'>> = props => (
	<svg
		width='19'
		height='19'
		viewBox='0 0 19 19'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='M8.48438 1L16.9697 9.48528L8.48438 17.9706'
			stroke='white'
			stroke-width='2'
		/>
		<path d='M16.9697 9.48528H-0.000906566' stroke='white' stroke-width='2' />
	</svg>
)
