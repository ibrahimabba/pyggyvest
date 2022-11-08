import React, { useState } from 'react';
import { HStack, View, Image, Text } from 'native-base';
import { EvilIcons, FontAwesome } from '@expo/vector-icons';
import Box from './Box';

type Props = {
    title: string;
    category: string;
    time: string;
    imgSrc: {
        uri: string;
    }
};
export default function Heading({ category, time, title, imgSrc }: Props) {

    return (
        <View w="100%" alignItems="center">
            <Image source={imgSrc} h='48' w='48' alt={imgSrc.uri} rounded='full' />
            <Text color='black' mt='5' fontWeight='bold' fontSize={18}>
                {title}
            </Text>
            <Text color='grey' mt='5' fontWeight='semibold' fontSize={16}>
                🍕{' ' + category}
            </Text>
            <HStack alignItems='center' justifyContent='space-between' w='65%' my='3'>
                <HStack alignItems='center'>
                    <EvilIcons name="clock" size={20} color="black" />
                    <Text
                        fontSize={'14px'}
                        fontWeight={'400'}
                        color="black">
                        {' ' + time}
                    </Text>
                </HStack>
                <Text
                    fontSize={'14px'}
                    fontWeight={'400'}
                    mb='8px'
                    color="black">
                    {'   .   '}
                </Text>
                <HStack alignItems='center'>
                    <FontAwesome name="star" size={18} color="orange" />
                    <Text
                        fontSize={'14px'}
                        fontWeight={'400'}
                        color="black">
                        {'  4.8'}
                    </Text>
                    <Text
                        fontSize={'14px'}
                        fontWeight={'400'}
                        color='grey'>
                        {' (2.2k review) >'}
                    </Text>
                </HStack>
            </HStack>
            <Box />
            <Text fontSize={'14px'}
                fontWeight={'400'}
                color='grey'
                w='90%'
                mt='5'
                textAlign='center'
            >
                {'Melting cheese pizza making with Extra virgin olive oil, Cornmeal, beef/checken, Tomato sauce (smooth or pureed), Firm mozza, 100 gm onion, 70 gm chopped capsicum...'}
                <Text color='green.600'>
                    More
                </Text>
            </Text>
        </View>
    );
}
