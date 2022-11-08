import React from 'react'
import { HStack, Image, VStack, Text } from "native-base";

export default function Header() {
    return (
        <HStack w='100%' alignItems='center' justifyContent='space-between' px='6'>
            <VStack>
                <Text fontWeight='semibold' fontSize={16} color='gray.500'>Hi Ibrahim</Text>
                <Text fontWeight='bold' fontSize={18}>Hungry Now? 🔥</Text>
            </VStack>
            <Image alt='user' source={{ uri: 'https://images.pexels.com/photos/2115695/pexels-photo-2115695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' }} w='50px' h='50px' rounded='full' />
        </HStack>
    )
}