import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import { VStack, Text } from 'native-base';

export const HomeScreen = () => {
  const navigation = useNavigation();

  function handleNavigationCollectData() {
    const params = {
      name: 'Teste',
      ean: 124522323232323,
      amount: '',
      amount_packing: '49',
    };

    navigation.navigate('captureDataScreen', params);
  }

  return (
    <VStack flex={1} backgroundColor='bgColor' justifyContent='center' alignItems='center'>
      <Button title='Home' w={32} onPress={handleNavigationCollectData} />
    </VStack>
  );
};
