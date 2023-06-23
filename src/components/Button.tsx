import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
  title: string;
  variant?: 'outline' | 'solid';
}

export function Button({ title, variant = 'outline', ...rest }: Props) {
  return (
    <ButtonNativeBase
      w="full"
      h={14}
      bg={variant === 'outline' ? 'transparent' : 'buttonColor'}
      borderWidth={variant === 'outline' ? 1 : 0}
      borderColor="buttonColor"
      rounded="sm"
      _pressed={{
        bg: variant === 'outline' ? 'gray.500' : 'buttonColor'  
      }}
      {...rest}
    >
      <Text 
        color={variant === 'outline' ? 'buttonColor' : 'white'}
        fontFamily="heading"
        fontSize="sm"
      >
        {title}
      </Text>
    </ButtonNativeBase>
  );
}