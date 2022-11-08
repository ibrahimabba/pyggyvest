import React from 'react';
import { Center, HStack, Skeleton } from 'native-base';

export default function MealSkeleton() {
    return (
        <Center mt='10' w="100%">
            <HStack w="100%" justifyContent="space-around">
                <Skeleton w="40" h="48" rounded="md" />
                <Skeleton w="40" h="48" rounded="md" />
            </HStack>

        </Center>
    );
}
