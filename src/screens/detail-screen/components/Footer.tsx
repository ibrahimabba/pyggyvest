import React from 'react';
import { TouchableOpacity } from 'react-native';
import { HStack, Pressable, Text, useTheme, VStack } from 'native-base';
import { Entypo } from '@expo/vector-icons';

type Props = {
    quantity: number;
    handleDecreaseItemQty: () => void
    handleIncreaseItemQty: () => void
};
export default function Footer({ quantity, handleDecreaseItemQty, handleIncreaseItemQty }: Props) {
    const { colors } = useTheme()
    return (
        <VStack
            w="100%"
            mt='10'
            px="5">
            <HStack alignItems='center' justifyContent='space-between'>
                <Text color='black' fontWeight='bold'>Total:<Text color='green.600'>{' $'}</Text>12.99</Text>
                <HStack alignItems='center' justifyContent='space-between' w='24'>
                    <Pressable onPress={handleDecreaseItemQty} alignItems='center' justifyContent='space-between' w='6' h='6' borderColor='gray.400' borderWidth={1} borderRadius={5}>
                        <Entypo name="minus" size={22} color="grey" />
                    </Pressable>
                    <Text color='black' fontWeight='bold'>{quantity}</Text>
                    <Pressable onPress={handleIncreaseItemQty} alignItems='center' justifyContent='space-between' w='6' h='6' borderColor='gray.400' borderWidth={1} borderRadius={5}>
                        <Entypo name="plus" size={22} color="grey" />
                    </Pressable>
                </HStack>
            </HStack>
            <TouchableOpacity style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: colors.green[600],
                width: '100%',
                padding: '5%',
                marginTop: 25,
                borderRadius: 20
            }}>
                <Text color='white' fontSize={16} fontWeight='bold'>Next</Text>
            </TouchableOpacity>
        </VStack>
    );
}
