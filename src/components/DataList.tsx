import { useNavigation } from '@react-navigation/native';
import { FlatList, VStack } from 'native-base';
import { DataCard, DataCardProps } from './DataCard';

type Props = {
  data: DataCardProps[];
}

export function DataList({ data }: Props) {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.ean}
      renderItem={({ item }) => (
              <DataCard
                data={item} 
              />
            )}
      _contentContainerStyle={{ alignItems: 'center', paddingBottom: 20 }}
      showsVerticalScrollIndicator={false}
    />
  );
}