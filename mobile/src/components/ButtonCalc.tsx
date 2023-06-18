import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
  title: string;
  variant?: 'solid' | 'outline'
}

export function ButtonCalc({ title, variant = 'solid', ...rest }: Props) {
  return (
    <ButtonNativeBase
      h={12}
      justifyContent='center'
      flex={1}
      m={1}
      alignItems='center'
      bg={variant === 'outline' ? 'transparent' : 'blue.700'}
      borderWidth={variant === 'outline' ? 2 : 0}
      borderColor="blue.500"
      rounded="full"
      _pressed={{
        bg: variant === 'outline' ? 'gray.500' : 'blue.500'  
      }}
      {...rest}
    >
      <Text 
        color={variant === 'outline' ? 'blue.500' : 'white'}
        fontFamily="heading"
        fontSize="sm"
      >
        {title}
      </Text>
    </ButtonNativeBase>
  );
}