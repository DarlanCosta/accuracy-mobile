import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Heading, HStack, Text, VStack} from 'native-base';

import { DataDTO } from '@dtos/DataDTO';

type Props = TouchableOpacityProps & {
  data: DataDTO;
};

export function DataCard({ data, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack bg="gray.500" alignItems="center" p={2} pr={4} rounded="md" mb={3}>
        <VStack flex={1}>
          <Heading fontSize="lg" color="white" fontFamily="heading">
            {data.name}
          </Heading>

          <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}>
            {data.ean}
          </Text>

          <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}>
            {data.amount}
          </Text>

          <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}>
            {data.amount_packing}
          </Text>
        </VStack>
      </HStack>
    </TouchableOpacity>
  );
}