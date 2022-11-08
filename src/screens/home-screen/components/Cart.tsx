import React, { useEffect, useRef, useState, FC } from 'react'
import { Animated, Easing, TouchableOpacity } from "react-native";
import { HStack, Image, Pressable, Text, useTheme, View, VStack } from 'native-base'
import { useSelector } from ".././../../hooks/useRedux";
import { selectCartItems } from '../../../store/reducers/cart/cartSlice';

interface Props {
    handleNavigateToDetailsScreen: (cartItem: string) => void
}
const Cart: FC<Props> = ({ handleNavigateToDetailsScreen }) => {
    const { colors } = useTheme();
    const animation = useRef<Animated.Value>(new Animated.Value(100));
    const cartItems = useSelector(selectCartItems).cartItems
    const [showAll, setShowAll] = useState<boolean>(false)
    const firstTwo = cartItems.slice(0, 2)

    useEffect(() => {
        Animated.timing(animation.current, {
            toValue: showAll ? 200 : 100,
            duration: 700,
            easing: Easing.elastic(2),
            useNativeDriver: false,
        }).start()
    }, [showAll])

    const handleShowAllItems = () => {
        setShowAll(!showAll)
    }
    return (
        <View w='100%' alignItems='center' position='absolute' bottom='3%'>
            <Animated.View style={{ backgroundColor: colors.green[500], width: '90%', borderRadius: 23, height: animation.current }}>
                <TouchableOpacity onPress={handleShowAllItems}>
                    <View alignSelf='center' w={70} h='12px' bg='white' borderBottomRadius={50} alignItems='center' justifyContent='flex-start' >
                        <View w={42} h={1} bg='grey' rounded='full' />
                    </View>
                </TouchableOpacity>
                <HStack p='5' justifyContent='space-between' alignItems='center'>
                    <VStack>
                        <Text color='white' fontWeight='bold' fontSize={18}>
                            Cart
                        </Text>
                        <Text color='white' fontWeight='light'>
                            {cartItems.length} items
                        </Text>
                    </VStack>
                    {!showAll && <HStack>
                        {firstTwo.map((itm) => <TouchableOpacity onPress={() => handleNavigateToDetailsScreen(itm.title)} key={itm.title}><Image alt={itm.title} ml='2' source={itm.imgSrc} h='45px' w='45px' rounded='full' /></TouchableOpacity>)}
                    </HStack>}
                </HStack>
                {showAll && <HStack alignSelf='center'>
                    {cartItems.map((itm) => <TouchableOpacity onPress={() => handleNavigateToDetailsScreen(itm.title)} key={itm.title}><Image alt={itm.title} ml='2' source={itm.imgSrc} h='45px' w='45px' rounded='full' /></TouchableOpacity>)}
                </HStack>}
            </Animated.View>
        </View>
    )
}

export default Cart