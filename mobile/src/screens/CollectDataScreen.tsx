import { useState, useCallback } from 'react';
import { Alert } from 'react-native';

import storage from '../database/storage';
import { VStack, Text, Pressable, HStack, View } from 'native-base';
import { ButtonCalc } from '@components/ButtonCalc';

type ProductModel = {
  ean: string;
};

export const CollectDataScreen = () => {
  const [input, setInput] = useState('');
  const [products, setProducts] = useState({});
  const [led, setLed] = useState('');
  const [area, setArea] = useState('');
  const [scan, setScan] = useState('');
  const [settings, setSettings] = useState(null);
  const [display, setDisplay] = useState({
    seqproduto: '',
    description: '',
    ean: '',
    quantity: '',
    quantity_packing: '',
  });

  const handleSaveCollect = useCallback(async () => {
    storage.set('collects', JSON.stringify({ led, quantidade: 0 }));
    Alert.alert('Created!');
  }, []);

  const handleGetCollect = useCallback(async () => {
    const data = storage.getString('collects');
    console.warn(`aqui`, data);
  }, []);

  const handleDeleteCollect = useCallback(async (item: ProductModel) => {
    console.warn(`delete`, 'resdeleteponse');
  }, []);

  const handleTap = useCallback(
    (number: any) => {
      if (display.description === '' && led.length > 14) {
        Alert.alert('Max 14 caracteres');
        return;
      }
      if (display.description !== '' && led.length > 7) {
        Alert.alert('Max 7 caracteres');
        return;
      }
      setLed(led + number);
    },
    [display, led]
  );

  const cleanLed = useCallback(() => {
    if (led.length >= 0) {
      let number = led.substring(0, led.length - 1);
      setLed(number);
    }
  }, [led]);

  return (
    <VStack flex={1} backgroundColor='white'>
      <VStack backgroundColor='white' justifyContent='center'>
        <VStack justifyContent= 'space-around'>
          <View borderWidth={1} borderColor='blue.700' padding={4} mb={2}>
            <Text color='blue.700' fontFamily='heading' mb={8}>Produto</Text>
          </View>
          <View borderWidth={1} borderColor='blue.700' padding={4} mb={2}>
            <Text color='blue.700'  fontFamily='heading' mb={8}>EAN</Text>
          </View>
          <View borderWidth={1} borderColor='blue.700' padding={4}>
            <Text color='blue.700'  fontFamily='heading' mb={8}>Quantidade</Text>
          </View>

          {/* <View className="flex h-20 rounded-lg w-auto bg-gray-200 m-2 items-center justify-center"> */}
          <VStack
            h={20} rounded='lg' w='auto' bg='gray-200' m={2} alignItems='center' justifyContent='center'
          >
            <Text>{led}</Text>
          </VStack>
        </VStack>
        <VStack justifyContent='center' alignItems='center'>
          <HStack>
            <ButtonCalc title="7" onPress={() => handleTap('7')} />
            <ButtonCalc title="8" onPress={() => handleTap('8')} />
            <ButtonCalc title="9" onPress={() => handleTap('9')} />
          </HStack>
          <HStack>
            <ButtonCalc title="4" onPress={() => handleTap('4')} />
            <ButtonCalc title="5" onPress={() => handleTap('5')} />
            <ButtonCalc title="6" onPress={() => handleTap('6')} />
          </HStack>
          <HStack>
            <ButtonCalc title="1" onPress={() => handleTap('1')} />
            <ButtonCalc title="2" onPress={() => handleTap('2')} />
            <ButtonCalc title="3" onPress={() => handleTap('3')} />
          </HStack>
          <HStack >
            <ButtonCalc title="." fontFamily='heading' variant='outline' onPress={() => handleGetCollect()} />
            <ButtonCalc title="0" onPress={() => handleTap('0')} />
            <ButtonCalc title="Del" variant='outline' onPress={() => cleanLed()} />
          </HStack>
          <HStack>
            <ButtonCalc title="Enter" variant='outline' onPress={() => handleSaveCollect()} />
          </HStack>
        </VStack>
      </VStack>
    </VStack>
  );
};
