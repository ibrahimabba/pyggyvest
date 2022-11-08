import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {KeyboardAvoidingView, ScrollView} from 'native-base';

import {useDispatch, useSelector} from '../../hooks/useRedux';

import {RootStackScreenProps} from '../../../types';
import Header from './components/Header';
import SearchArea from './components/SearchArea';
import TopCategories from './components/TopCategories';
import Title from './components/Title';
import Sliders from './components/Sliders';
import {selectCategories} from '../../store/reducers/categories/categorySlice';
import {
  fetchCategoriesAsync,
  fetchMealCategoriesAsync,
} from '../../store/reducers/categories/categoryThunks';
import CategorySkeleton from './components/CategorySkelleton';

export default function HomeScreen({}: RootStackScreenProps<'HomeScreen'>) {
  const categoryState = useSelector(selectCategories);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    dispatch(fetchCategoriesAsync());
    dispatch(fetchMealCategoriesAsync());
  };

  if (categoryState.status === 'loading') {
    return <CategorySkeleton />;
  }
  return (
    <KeyboardAvoidingView
      backgroundColor="white"
      flex={1}
      paddingTop={StatusBar.currentHeight}>
      <ScrollView
        flex={1}
        height="100%"
        keyboardShouldPersistTaps={'handled'}
        showsVerticalScrollIndicator={false}>
        <Header />
        <SearchArea />
        <TopCategories CATEGORIES={categoryState.categories} />
        <Title title="Popular Items" />
        <Sliders items={categoryState.meals} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
