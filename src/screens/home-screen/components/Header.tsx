import React from 'react';
import {HStack, Image, VStack, Text} from 'native-base';

export default function Header() {
  return (
    <HStack w="100%" alignItems="center" justifyContent="space-between" px="6">
      <VStack>
        <Text fontWeight="semibold" fontSize={16} color="gray.500">
          Hi Ibrahim
        </Text>
        <Text fontWeight="bold" fontSize={18}>
          Hungry Now? 🔥
        </Text>
      </VStack>
      <Image
        alt="user"
        source={require('../../../../assets/images/img-1101.jpg')}
        w="50px"
        h="50px"
        rounded="full"
      />
    </HStack>
  );
}
