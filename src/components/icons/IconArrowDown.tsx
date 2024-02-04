import { ComponentPropsWithRef, FC } from 'react'

export const IconArrowDown: FC<ComponentPropsWithRef<'svg'>> = props => (
	<svg
		width='14'
		height='14'
		viewBox='0 0 14 14'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path d='M13 1L13 13L0.999999 13' stroke='white' stroke-width='2' />
		<path d='M13 13L1 0.999999' stroke='white' stroke-width='2' />
	</svg>
)
