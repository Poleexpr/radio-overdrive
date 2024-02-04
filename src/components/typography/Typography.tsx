import classnames from 'classnames'

type Tag = 'div' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p'
type Variant =
	| 'title'
	| 'title2'
	| 'title3'
	| 'title4'
	| 'title5'
	| 'title6'
	| 'title7'
	| 'text'
	| 'text2'
	| 'text3'
	| 'text4'
	| 'text5'
	| 'text6'
	| 'text7'
	| 'text8'

interface TypographyProps {
	tag?: Tag
	variant: Variant
	children: React.ReactNode
	className?: string
}

export const Typography: React.FC<TypographyProps> = ({
	tag = 'div',
	variant,
	children,
	className,
}) => {
	const Component = tag
	return (
		<Component className={classnames(variant, className)}>{children}</Component>
	)
}
