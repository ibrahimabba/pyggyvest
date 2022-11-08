import React from 'react';
import { TouchableOpacity } from "react-native";
import { HStack } from 'native-base';
import { AntDesign, Ionicons } from '@expo/vector-icons';

type Props = {
    handleBackPress: () => void
}
export default function Header({ handleBackPress }: Props) {
    return (
        <HStack w="100%" alignItems="center" justifyContent="space-between" px="6" pt='6'>
            <TouchableOpacity onPress={handleBackPress}>
                <AntDesign name="left" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicons name="heart-outline" size={24} color="white" />
            </TouchableOpacity>
        </HStack>
    );
}
