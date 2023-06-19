import { VStack } from 'native-base';
import { useCallback} from 'react';
import { DataList } from '@components/DataList';
import { useData } from '@hooks/useData';
import { useFocusEffect } from '@react-navigation/native';

export const ListDataScreen = () => {

  const { data } = useData();
  
  return (
    <VStack flex={1} backgroundColor='bgColor' justifyContent='center' alignItems='center'>
      <DataList data={data} />
    </VStack>
  );
};
