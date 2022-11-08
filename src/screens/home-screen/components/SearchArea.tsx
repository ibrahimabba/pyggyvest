import React, {FC} from 'react';
import {HStack, Input, Text, View, VStack} from 'native-base';
import {TouchableWithoutFeedback} from 'react-native';
import {Ionicons, FontAwesome} from '@expo/vector-icons';

interface Props {
  onPress?: () => void;
}

const SearchArea: FC<Props> = ({onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <VStack space={4} marginTop="8">
        <HStack
          width={'88%'}
          //_light={{ bg: '#F8F8F8' }}
          alignItems={'center'}
          _dark={{borderWidth: 0.5, borderColor: 'gray.500'}}
          padding={'8px'}
          pl="5"
          pr="5"
          borderRadius={20}
          borderWidth={1}
          borderColor="gray.300"
          alignSelf="center">
          <Input
            fontWeight={'500'}
            fontSize="14px"
            lineHeight="18px"
            leftElement={
              <Ionicons name="search-outline" size={26} color="black" />
            }
            placeholder="Search.."
            flex={1}
            variant={'unstyled'}
            _focus={{borderWidth: 0, fontWeight: 'normal'}}
          />
          <View>
            <FontAwesome name="sliders" size={24} color="black" />
            <View
              left="3"
              bottom="2"
              position="absolute"
              alignItems="center"
              justifyContent="center"
              bg="white"
              rounded="full"
              w="22px"
              h="22px">
              <View
                alignItems="center"
                justifyContent="center"
                bg="green.600"
                rounded="full"
                w="17px"
                h="17px">
                <Text color="white" fontSize={10}>
                  2
                </Text>
              </View>
            </View>
          </View>
        </HStack>
      </VStack>
    </TouchableWithoutFeedback>
  );
};

export default SearchArea;
