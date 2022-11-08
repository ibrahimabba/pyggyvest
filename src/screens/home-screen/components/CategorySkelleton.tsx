import React from 'react';
import {Center, HStack, Skeleton} from 'native-base';

export default function CategorySkeleton() {
  return (
    <Center w="100%">
      <HStack mt="10" w="100%" justifyContent="space-around">
        <Skeleton w="16" h="16" rounded="md" />
        <Skeleton w="16" h="16" rounded="md" />
        <Skeleton w="16" h="16" rounded="md" />
        <Skeleton w="16" h="16" rounded="md" />
      </HStack>
    </Center>
  );
}
