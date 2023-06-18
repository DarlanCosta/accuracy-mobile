import { useState, useCallback } from 'react';
import { Alert } from 'react-native';

import { VStack, Text, HStack, View, Box } from 'native-base';
import { ButtonCalc } from '@components/ButtonCalc';

import { useData } from '@hooks/useData';


type CollectDataScreenProps = {
  route: {
    params: {
      name: string;
      ean: number;
      amount: number;
      amount_packing: number;
    };
  };
};

export const CollectDataScreen = ({ route }:CollectDataScreenProps ) => {

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

  const { name, ean, amount, amount_packing } = route.params;
  
  const { handleInsertCollect } = useData();

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

  async function handleCadastrar() {
    const data = {
      name: name,
      ean: ean,
      amount: amount,
      amount_packing: amount_packing
    };
  
     handleInsertCollect(data);
  }

  return (
    <VStack flex={1} backgroundColor='bgColor'>
        <VStack backgroundColor='bgColor' justifyContent='center'>
          <VStack justifyContent= 'space-around'>
            <VStack bgColor='bgColor'>
              <View rounded='xl' padding={4} mb={2}>
                <Text color='white' fontFamily='heading' fontSize={18} mb={4}>Produto</Text>
                <Text color='white' fontFamily='body'> {name} </Text>
              </View>
              <View rounded='xl' padding={4} mb={2}>
                <Text color='white'  fontFamily='heading' fontSize={18} mb={4}>EAN</Text>
                <Text color='white' fontFamily='body'> {ean} </Text>
              </View>
              <View rounded='xl' padding={4}>
                <Text color='white' fontFamily='heading' fontSize={18} mb={4}>Quantidade</Text>
                <Text color='white' fontFamily='body'> {amount} </Text>
              </View>
            </VStack>

            {/* <View className="flex h-20 rounded-lg w-auto bg-gray-200 m-2 items-center justify-center"> */}
            <VStack
              h={20} rounded='lg' w='auto' bg='bgColor' alignItems='center' justifyContent='center'
            >
              <Text color='white' fontSize='lg'>{led}</Text>
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
              <ButtonCalc title="." fontFamily='heading'/>
              <ButtonCalc title="0" onPress={() => handleTap('0')} />
              <ButtonCalc title="Del"  onPress={() => cleanLed()} />
            </HStack>
            <HStack>
              <ButtonCalc title="Enter"  onPress={() => handleCadastrar()} />
            </HStack>
          </VStack>
        </VStack>
    </VStack>
  );
};
