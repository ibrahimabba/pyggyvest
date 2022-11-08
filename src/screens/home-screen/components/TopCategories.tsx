import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import {HStack, Image, ScrollView, Text, useTheme, VStack} from 'native-base';
import {
  Category,
  selectCategories,
  setPickedCategory,
} from '../../../store/reducers/categories/categorySlice';
import {useSelector, useDispatch} from '../../../hooks/useRedux';
import CategorySkeleton from './CategorySkelleton';

type Props = {
  CATEGORIES: Category[];
  searchQuery: string;
};
const TopCategories: FC<Props> = ({CATEGORIES, searchQuery}) => {
  const categoryState = useSelector(selectCategories);

  const searchCategories = (cats: Category[], query = '') => {
    return cats.filter(
      cat => cat.strCategory.toLowerCase().indexOf(query.toLowerCase()) !== -1,
    );
  };

  let searchableCategories = searchCategories(CATEGORIES, searchQuery);
  if (categoryState.categoryStatus === 'loading') {
    return <CategorySkeleton />;
  }
  return (
    <HStack alignItems="center" ml="5%" mt="8">
      <ScrollView
        horizontal
        maxHeight={'150px'}
        showsHorizontalScrollIndicator={false}
        centerContent>
        {searchableCategories.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </ScrollView>
    </HStack>
  );
};

const Card: FC<Category> = ({strCategory, strCategoryThumb}) => {
  const {colors} = useTheme();
  const categoryState = useSelector(selectCategories);
  const dispatch = useDispatch();
  const handlePickedCategory = () => {
    dispatch(setPickedCategory(strCategory));
  };
  return (
    <VStack h={'110px'} alignItems="center">
      <TouchableOpacity
        onPress={handlePickedCategory}
        style={{
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
          width: 90,
          height: 110,
          backgroundColor:
            categoryState.pickedCategory === strCategory
              ? colors.green[600]
              : 'white',
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
      </TouchableOpacity>
    </VStack>
  );
};

export default TopCategories;
