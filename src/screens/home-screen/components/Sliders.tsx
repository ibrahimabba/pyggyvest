import { Text, ScrollView, VStack, Image, HStack, View } from 'native-base';
import React, { FC } from 'react';
import {
  ImageSourcePropType,
  ImageURISource,
  TouchableOpacity,
} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useDispatch, useSelector } from '../../../hooks/useRedux';
import { addToCart } from '../../../store/reducers/cart/cartSlice';
import { selectCategories } from '../../../store/reducers/categories/categorySlice';
import MealSkeleton from './MealSkelleton';

export interface SlideShowProps {
  onPress?: () => void;
  items: SlideItem[];
  maxH?: string | number;
}

export type SlideItem = {
  title: string;
  calories: string;
  price: string;
  time: string;
  imgSrc: ImageURISource | ImageSourcePropType | { uri: string };
  category: string
};

const SlideCards = ({ imgSrc, calories, title, price, time, category }: SlideItem) => {
  const dispatch = useDispatch();
  return (
    <VStack w={200} alignItems="center" p="4" mr="4" bg="gray.200" rounded="3xl">
      <Text fontWeight="bold" fontSize={14}>
        {title}
      </Text>
      <Text fontWeight="bold" fontSize={14}>
        <Text fontWeight="bold" color="green.300" fontSize={14}>
          $
        </Text>
        {price}
      </Text>
      <Image mt="4" size="xl" rounded="full" source={imgSrc} alt={title} />
      <HStack alignItems="center" justifyContent="space-between" w="100%" mt="5">
        <VStack>
          <Text mb="2" fontSize={'11px'} lineHeight={'15px'} fontWeight={'600'}>
            {'🔥 ' + calories + ' Calories'}
          </Text>
          <HStack>
            <EvilIcons name="clock" size={20} color="grey" />
            <Text
              fontSize={'11px'}
              lineHeight={'15px'}
              fontWeight={'400'}
              color="gray.500">
              {' ' + time}
            </Text>
          </HStack>
        </VStack>
        <TouchableOpacity onPress={() => dispatch(addToCart({
          calories,
          imgSrc: imgSrc as { uri: string; },
          price,
          time,
          title,
          category
        }))}>
          <View
            bg="white"
            w="40px"
            h="40px"
            alignItems="center"
            justifyContent="center"
            rounded="2xl">
            <MaterialCommunityIcons
              name="shopping-outline"
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>
      </HStack>
    </VStack>
  )
}

const Sliders: FC<SlideShowProps> = ({ items, maxH, ...rest }) => {
  const categoryState = useSelector(selectCategories)

  if (categoryState.mealStatus === 'loading') {
    return <MealSkeleton />
  }
  return (
    <>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} mt={'20px'}>
        {items &&
          items.map((item, i) => (
            <View key={i} ml={i === 0 ? '5' : '0'}>
              <SlideCards {...item} {...rest} />
            </View>
          ))}
      </ScrollView>
    </>
  );
};

export default Sliders;
