import { VStack, Text } from 'native-base';

export const ListProductsScreen = () => {
  return (
    <VStack flex={1} backgroundColor='bgColor' justifyContent='center' alignItems='center'>
      <Text color='gray.500'>Listar Produtos</Text>
    </VStack>
  );
};
