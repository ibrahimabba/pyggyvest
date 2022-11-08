import React, {FC} from 'react';
import {TouchableHighlight} from 'react-native';
import {HStack, Image, ScrollView, Text, useTheme, VStack} from 'native-base';
import {Category} from '../../../store/reducers/categories/categorySlice';

type Props = {
  CATEGORIES: Category[];
};
const TopCategories: FC<Props> = ({CATEGORIES}) => {
  return (
    <HStack alignItems="center" ml="5%" mt="8">
      <ScrollView
        horizontal
        maxHeight={'150px'}
        showsHorizontalScrollIndicator={false}
        centerContent>
        {CATEGORIES.map((item, i) => (
          <Card key={i} {...item} onPress={() => {}} />
        ))}
      </ScrollView>
    </HStack>
  );
};

const Card: FC<Category & {onPress: () => void}> = ({
  onPress,
  idCategory,
  strCategory,
  strCategoryThumb,
}) => {
  const {colors} = useTheme();

  return (
    <VStack h={'110px'} alignItems="center">
      <TouchableHighlight
        onPress={onPress}
        underlayColor={colors.green[600]}
        style={{
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
          width: 90,
          height: 110,
          borderRadius: 20,
          borderStyle: 'solid',
          borderColor: colors.gray[300],
          marginHorizontal: 7,
        }}>
        <>
          <Image
            w="65px"
            h="40px"
            alt={strCategory}
            source={{uri: strCategoryThumb}}
          />
          <Text fontSize="11px" mt="2" lineHeight="15px" fontWeight="700">
            {strCategory}
          </Text>
        </>
      </TouchableHighlight>
    </VStack>
  );
};

export default TopCategories;
