import React, { useState } from 'react';
import { HStack, View, Text, Pressable } from 'native-base';

export default function Box() {
    const [pickedBox, setPickedBox] = useState('Medium 12"')
    const BOXS: { title: string; price: string }[] = [{
        title: 'Small 8"',
        price: '$9.99'
    }, {
        title: 'Medium 12"',
        price: '$12.99'
    }, {
        title: 'Large 18"',
        price: '$16.99'
    }]
    return (
        <HStack>
            {BOXS.map((bx) => <Pressable key={bx.title} onPress={() => setPickedBox(bx.title)} m='2' alignItems='center' justifyContent='center' p='5' borderRadius='10px' borderWidth={1} w='24' borderColor={pickedBox === bx.title ? 'green.600' : 'gray.400'}>
                <View alignItems='center' justifyContent='center' w='5' h='5' borderWidth={1} borderColor={pickedBox === bx.title ? 'green.600' : 'gray.400'} rounded='full' mb='3' bg={pickedBox === bx.title ? 'green.600' : 'white'}>
                    <View w='2' h='2' bg={pickedBox === bx.title ? 'white' : 'white'} rounded='full' />
                </View>
                <Text
                    fontSize={'10px'}
                    fontWeight={'400'}
                    color='grey'>
                    {bx.title}
                </Text>
                <Text
                    fontSize={'14px'}
                    fontWeight={'600'}
                    color='black'>
                    {bx.price}
                </Text>
            </Pressable>)}
        </HStack>
    );
}
