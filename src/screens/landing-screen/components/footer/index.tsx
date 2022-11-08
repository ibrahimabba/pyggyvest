import React from 'react';
import {TouchableOpacity} from 'react-native';
import {HStack, Text, View} from 'native-base';

type Props = {
  handleLogin: () => void;
};
export default function Footer({handleLogin}: Props) {
  return (
    <HStack
      w="100%"
      backgroundColor="black"
      alignItems="center"
      justifyContent="space-between"
      px="5">
      <View
        w="45%"
        backgroundColor="blue.500"
        h="12"
        borderRadius={5}
        borderBottomLeftRadius={0}
        alignItems="center"
        justifyContent="center">
        <TouchableOpacity onPress={handleLogin}>
          <Text color="white">LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View
        w="45%"
        h="12"
        borderRadius={5}
        borderBottomLeftRadius={0}
        borderWidth={1}
        borderColor="white"
        alignItems="center"
        justifyContent="center">
        <TouchableOpacity>
          <Text color="white">REGISTER</Text>
        </TouchableOpacity>
      </View>
    </HStack>
  );
}
