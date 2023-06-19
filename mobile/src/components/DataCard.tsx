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
      <Text>
        {data.name}
      </Text>

      <Text>
        {data.ean}
      </Text>

      <Text>
        {data.amount}
      </Text>

      <Text>
        {data.amount_packing}
      </Text>
    </VStack>
  );
}