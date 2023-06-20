import { DataDTO } from '@dtos/DataDTO';
import { Text, VStack} from 'native-base';

type Props = {
  data: DataDTO;
}

export function DataCard({ data }: Props) {
  return (
    <VStack flex={1} bgColor='gray.100'>
      <Text color='white'>
        {data.name}
      </Text>

      <Text color='white'>
        {data.ean}
      </Text>

      <Text color='white'>
        {data.amount}
      </Text>

      <Text color='white'>
        {data.amount_packing}
      </Text>
    </VStack>
  );
}