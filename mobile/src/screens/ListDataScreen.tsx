import { DataCard } from '@components/DataCard';
import { DataDTO } from '@dtos/DataDTO';
import { VStack, FlatList } from 'native-base';
import { useState } from 'react';
import storage from '../database/storage';
import { Button } from '@components/Button';

export const ListDataScreen = () => {

  const [datas, setDatas] = useState<DataDTO[]>([]);

  function handlePress() {
    console.log('List Data =>',storage.getString('collects'))
  }
  
  return (
    <VStack flex={1} backgroundColor='bgColor' justifyContent='center' alignItems='center'>
      <Button title="List" w={32} onPress={handlePress} />
    </VStack>
  );
};
