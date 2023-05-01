import { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Box = ({ className = '', ...props }) => (
  <TouchableOpacity
    className={`flex flex-1 rounded-full bg-gray1 justify-center items-center ${className}`}
    {...props}
  >
    <Text className={`flex text-2xl text-white`}>{props.text}</Text>
  </TouchableOpacity>
);

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

  const handleCreateCollect = useCallback(async () => {
    await database.write(async () => {
      await database.get<ProductModel>('products').create((data) => {
        (data.description = 'NESCAU BALL 500GR'), (data.ean = '7893289742912');
      });
    });

    Alert.alert('Created!');
  }, []);

  const handleGetCollect = useCallback(async () => {
    console.warn(led);
    const products = database.get<ProductModel>('products');
    const response = await products.query(Q.where('ean', led)).fetch();

    console.warn(`aqui`, response);
  }, []);

  const handleDeleteCollect = useCallback(async (item: ProductModel) => {
    await database.write(async () => {
      await item.destroyPermanently();
    });
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
    <View className="flex flex-1 justify-center bg-blue1">
      <LinearGradient style={{ flex: 1 }} colors={['#2b2e34', '#171b24', '#25272e']}>
        <LinearGradient
          style={{ flex: 1, justifyContent: 'space-around' }}
          colors={['#242525', '#1c202a', '#000103']}
        >
          <View className="flex h-14 rounded-lg w-auto bg-gray-400 m-2">
            <Text className="text-base p-1">Produto</Text>
          </View>
          <View className="flex h-14 rounded-lg w-auto bg-gray-400 m-2">
            <Text className="text-base p-1">EAN</Text>
          </View>
          <View className="flex h-14 rounded-lg w-auto bg-gray-400 m-2">
            <Text className="text-base p-1">Quantidade</Text>
          </View>

          {/* <View className="flex h-20 rounded-lg w-auto bg-gray-200 m-2 items-center justify-center"> */}
          <LinearGradient
            className="flex h-20 rounded-lg w-auto bg-gray-200 m-2 items-center justify-center"
            colors={['#9fa3ad', '#cad0df', '#f3f4f6']}
          >
            <Text className="p-2 text-gray-900 text-3xl">{led}</Text>
          </LinearGradient>
        </LinearGradient>
        <View className="flex flex-1 flex-col bg-background p-2 ">
          <View className="flex flex-1 justify-between flex-row ">
            <Box text="7" className="m-1" onPress={() => handleTap('7')} />
            <Box text="8" className="m-1" onPress={() => handleTap('8')} />
            <Box text="9" className="m-1" onPress={() => handleTap('9')} />
          </View>
          <View className="flex flex-1 justify-between flex-row p-1">
            <Box text="4" className="m-1" onPress={() => handleTap('4')} />
            <Box text="5" className="m-1" onPress={() => handleTap('5')} />
            <Box text="6" className="m-1" onPress={() => handleTap('6')} />
          </View>
          <View className="flex flex-1 justify-between flex-row p-1">
            <Box text="1" className="m-1" onPress={() => handleTap('1')} />
            <Box text="2" className="m-1" onPress={() => handleTap('2')} />
            <Box text="3" className="m-1" onPress={() => handleTap('3')} />
          </View>
          <View className="flex flex-1 justify-between flex-row p-1">
            <Box text="." className="bg-orange m-1" onPress={() => handleGetCollect()} />
            <Box text="0" className="m-1" onPress={() => handleTap('0')} />
            <Box text="del" className="bg-orange m-1" onPress={() => cleanLed()} />
          </View>
          <View className="flex flex-1 justify-between flex-row p-1">
            <Box text="Enter" className="bg-orange m-1" onPress={() => handleCreateCollect()} />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};
