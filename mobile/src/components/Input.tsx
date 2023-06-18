import { IInputProps, Input as NativeBaseInput, useTheme } from 'native-base'

export function Input({ ...rest }: IInputProps) {
	const theme = useTheme()

	return (
		<NativeBaseInput
			bg="transparent"
			h={12}
			px={4}
			borderWidth={1}
			borderColor="buttonColor"
			borderRadius="lg"
			fontSize="md"
			color="white"
			fontFamily="body"
			mb={4}
			placeholderTextColor="gray.400"
			selectionColor="gray.600"
			_focus={{
				backgroundColor: '#3E3A40',
				borderColor: 'buttonColor'
			}}
			{...rest}
		/>
	)
}