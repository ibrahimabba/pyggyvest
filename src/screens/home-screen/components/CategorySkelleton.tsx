import React from 'react';
import {Center, HStack, Skeleton, VStack} from 'native-base';

export default function CategorySkeleton() {
  return (
    <Center w="100%">
      <VStack
        paddingTop="110px"
        w="90%"
        mt="12"
        maxW="400"
        space={8}
        overflow="hidden"
        rounded="md">
        <Skeleton h="16" rounded="full" />
        <HStack w="100%" justifyContent="space-around">
          <Skeleton w="16" h="16" rounded="md" />
          <Skeleton w="16" h="16" rounded="md" />
          <Skeleton w="16" h="16" rounded="md" />
          <Skeleton w="16" h="16" rounded="md" />
        </HStack>
        <Skeleton.Text w="40%" lines={1} h="4" />
        <HStack w="100%" justifyContent="space-around">
          <Skeleton w="40" h="48" rounded="md" />
          <Skeleton w="40" h="48" rounded="md" />
        </HStack>
      </VStack>
    </Center>
  );
}
