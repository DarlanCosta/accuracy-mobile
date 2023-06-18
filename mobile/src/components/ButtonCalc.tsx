import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
  title: string;
  variant?: 'solid' | 'outline'
}

export function ButtonCalc({ title, variant = 'outline', ...rest }: Props) {
  return (
    <ButtonNativeBase
      h={12}
      justifyContent='center'
      flex={1}
      m={1}
      alignItems='center'
      bg={variant === 'outline' ? 'transparent' : 'buttonCollect'}
      borderWidth={variant === 'outline' ? 2 : 0}
      borderColor="buttonCollect"
      rounded="full"
      _pressed={{
        bg: variant === 'outline' ? 'gray.500' : 'buttonCollect'  
      }}
      {...rest}
    >
      <Text 
        color={variant === 'outline' ? 'buttonCollect' : 'white'}
        fontFamily="heading"
        fontSize="sm"
      >
        {title}
      </Text>
    </ButtonNativeBase>
  );
}