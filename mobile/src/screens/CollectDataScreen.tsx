import { useState, useCallback } from 'react';
import { Alert, Modal } from 'react-native';

import storage from '../database/storage';
import { VStack, Text, HStack, View, Box } from 'native-base';
import { ButtonCalc } from '@components/ButtonCalc';
import { Button } from '@components/Button';

type ProductModel = {
  name: string;
  ean: string;
  amount: number;
};

export const CollectDataScreen = ({ name, ean, amount}: ProductModel) => {
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

  const [modalVisible, setModalVisible] = useState(false);

  function OpenModal() {
    setModalVisible(true);
  }
  function CloseModal() {
    setModalVisible(false);
  }

  const handleSaveCollect = useCallback(async () => {
    OpenModal();
    if (modalVisible) {
      storage.set('collects', JSON.stringify({ led, quantidade: 0 }));
    }
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
        <Modal
          animationType="none"
          transparent
          visible={modalVisible}
          onRequestClose={CloseModal}
        >
          <VStack 
            backgroundColor= 'rgba(0, 0, 0, 0.4)'
            alignItems= 'center'
            position= 'absolute'
            bottom= {0}
            left= {0}
            right= {0}
            height= '100%'
          >
            <Box
              ml={4}
              mr={4}
              padding={2}
              alignItems= 'center'
              borderRadius= {8}
              backgroundColor= 'gray.100'
              height= {72}
              marginTop= {32}
              width= {96}
            >
              <VStack alignItems='center' justifyContent='center' mb={5}>
                <Text mb={2} fontFamily='heading' fontSize='xl'>Created!</Text>
                <Text color='black' fontFamily='heading' fontSize='md' mb={2}>Produto</Text>
                <Text color='black' fontFamily='body' fontSize='xs'>{name}</Text>
                <Text color='black' fontFamily='heading' fontSize='md' mb={2}>EAN</Text>
                <Text color='black' fontFamily='body' fontSize='xs'>{ean}</Text>
                <Text color='black' fontFamily='heading' fontSize='md' mb={2}>Quantidade</Text>
                <Text color='black' fontFamily='body' fontSize='xs'>{amount}</Text>
              </VStack>
              <Button w='30%' title="Ok" onPress={CloseModal} />
            </Box>
          </VStack>
        </Modal>
        <VStack justifyContent= 'space-around'>
          <View borderWidth={1} borderColor='blue.700' padding={4} mb={2}>
            <Text color='blue.700' fontFamily='heading' fontSize={18} mb={4}>Produto</Text>
            <Text color='blue.700' fontFamily='body'> {name} </Text>
          </View>
          <View borderWidth={1} borderColor='blue.700' padding={4} mb={2}>
            <Text color='blue.700'  fontFamily='heading' fontSize={18} mb={4}>EAN</Text>
            <Text color='blue.700' fontFamily='body'> {ean} </Text>
          </View>
          <View borderWidth={1} borderColor='blue.700' padding={4}>
            <Text color='blue.700'  fontFamily='heading' fontSize={18} mb={4}>Quantidade</Text>
            <Text color='blue.700' fontFamily='body'> {amount} </Text>
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
