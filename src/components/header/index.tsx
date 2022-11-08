import React from 'react'
import { StatusBar } from "react-native";
import { HStack, Image } from "native-base";

export default function Header() {
    return (
        <HStack marginTop={StatusBar.currentHeight as number + 15} w='100%' alignItems='center' justifyContent='center'>
            <Image alt='logo' source={require('../../../assets/icons/piggyvest.png')} w='135px' h='25px' />
        </HStack>
    )
}
