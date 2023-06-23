import { FlatList } from 'native-base';
import { DataCard } from './DataCard';
import { DataDTO } from '@dtos/DataDTO';

type Props = {
  data: DataDTO[];
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