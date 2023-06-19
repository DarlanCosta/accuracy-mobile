import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import { VStack, Text } from 'native-base';

export const HomeScreen = () => {
  const navigation = useNavigation();

  function handleNavigationCollectData() {
    const params = {
      name: 'cu',
      ean: '12452232',
      amount: '',
      amount_packing: '41',
    };

    navigation.navigate('captureDataScreen', params);
  }

  return (
    <VStack flex={1} backgroundColor='bgColor' justifyContent='center' alignItems='center'>
      <Button title='Home' w={32} onPress={handleNavigationCollectData} />
    </VStack>
  );
};
