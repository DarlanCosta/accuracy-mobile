import { Text, VStack} from 'native-base';

export type DataCardProps = {
  name: string,
  ean: string,
  amount: string,
  amount_packing: string,
};

type Props = {
  data: DataCardProps;
}

export function DataCard({ data }: Props) {
  return (
    <VStack flex={1} bgColor='buttonColor'>
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