import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base'

type Props = IButtonProps & {
	title: string
	bgColor: 'blue.500' | 'gray.700' | 'gray.300'
	_borderColor: 'blue.700' | 'black' | 'gray.400'
	textColor: 'gray.100' | 'gray.600'
	widthSize?: 'full' | '45%'
}

export function Button({
	title,
	bgColor,
	_borderColor,
	textColor,
	widthSize = 'full',
	...rest
}: Props) {
	return (
		<ButtonNativeBase
			w={widthSize}
			h={12}
			bg={bgColor}
			borderWidth={1}
			borderColor={_borderColor}
			rounded="lg"
			justifyItems="center"
			_pressed={{
				opacity: 0.9,
				backgroundColor: bgColor
			}}
			{...rest}
		>
			<Text color={textColor} fontFamily="heading" fontSize="sm">
				{title}
			</Text>
		</ButtonNativeBase>
	)
}