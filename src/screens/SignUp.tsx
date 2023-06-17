import { useNavigation } from '@react-navigation/native'
import {
	Center,
	HStack,
	Pressable,
	ScrollView,
	Stack,
	Text,
	VStack,
	useTheme
} from 'native-base'
import { Eye, EyeSlash, PencilSimpleLine } from 'phosphor-react-native'
import { useState } from 'react'

import LogoSvg from '@assets/logo.svg'

import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { TouchableOpacity } from 'react-native'

export function SignUp() {
	// Input Icon - Eye EyeSlash
	const [showPassword, setShowPassword] = useState(false)
	const [showConfirmPassword, setShowConfirmPassword] = useState(false)
	const THEME = useTheme()

	// stack navigation
	const navigation = useNavigation()

	function handleGoBack() {
		navigation.goBack()
	}

	return (
		<Stack safeArea>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Stack bg="gray.200">
					<VStack mx={10} mt={10} mb={32} justifyContent="center">
						<Center>
							<LogoSvg width={90} height={90} />
							<Text fontFamily="heading" fontSize="lg">
								Boas vindas!
							</Text>
							<Text
								mb={4}
								fontFamily="body"
								fontSize="sm"
								color="gray.400"
								textAlign="center"
							>
								Crie sua conta e use o espaço para comprar itens variados e
								vender seus produtos
							</Text>
							<HStack flex={1} alignItems="center" justifyContent="center">
								<TouchableOpacity>
									<Pressable
										rounded="full"
										h={10}
										w={10}
										mb={-10}
										ml={-8}
										bg="blue.500"
										justifyContent="center"
										alignItems="center"
										_pressed={{ opacity: 0.9 }}
									>
										<PencilSimpleLine
											size={20}
											color={THEME.colors.gray[200]}
										/>
									</Pressable>
								</TouchableOpacity>
							</HStack>

							<Input placeholder="Nome" />
							<Input placeholder="Email" />
							<Input placeholder="Telefone" />
							<Input
								placeholder="Senha"
								type={showPassword ? 'text' : 'password'}
								InputRightElement={
									<Pressable
										mr={4}
										onPress={() => setShowPassword(!showPassword)}
									>
										{showPassword ? (
											<Eye color={THEME.colors.gray[400]} size={24} />
										) : (
											<EyeSlash color={THEME.colors.gray[400]} size={24} />
										)}
									</Pressable>
								}
							/>
							<Input
								placeholder="Confirmar senha"
								type={showConfirmPassword ? 'text' : 'password'}
								InputRightElement={
									<Pressable
										mr={4}
										onPress={() => setShowConfirmPassword(!showConfirmPassword)}
									>
										{showConfirmPassword ? (
											<Eye color={THEME.colors.gray[400]} size={24} />
										) : (
											<EyeSlash color={THEME.colors.gray[400]} size={24} />
										)}
									</Pressable>
								}
							/>
							<Button
								mt={3}
								title="Criar"
								bgColor="gray.700"
								_borderColor="black"
								textColor="gray.100"
							/>

							<Text
								mt={16}
								fontFamily="body"
								fontSize="sm"
								color="gray.400"
								textAlign="center"
							>
								já tem uma conta?
							</Text>
							<Button
								mt={4}
								title="Ir para o login"
								bgColor="gray.300"
								_borderColor="gray.400"
								textColor="gray.600"
								onPress={handleGoBack}
							/>
						</Center>
					</VStack>
				</Stack>
			</ScrollView>
		</Stack>
	)
}