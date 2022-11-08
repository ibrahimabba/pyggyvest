import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { KeyboardAvoidingView, ScrollView } from 'native-base';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

import { useDispatch, useSelector } from '../../hooks/useRedux';

import { RootStackScreenProps } from '../../../types';
import Header from './components/Header';
import SearchArea from './components/SearchArea';
import TopCategories from './components/TopCategories';
import Title from './components/Title';
import Sliders from './components/Sliders';
import { selectCategories } from '../../store/reducers/categories/categorySlice';
import {
  fetchCategoriesAsync,
  fetchMealCategoriesAsync,
} from '../../store/reducers/categories/categoryThunks';
import Cart from './components/Cart';

export default function HomeScreen({ navigation }: RootStackScreenProps<'HomeScreen'>) {
  const [searchQuery, setSearchQuery] = useState('');
  const categoryState = useSelector(selectCategories);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchMeals();
  }, [categoryState.pickedCategory]);

  const fetchCategories = () => {
    dispatch(fetchCategoriesAsync());
  };

  const fetchMeals = () => {
    dispatch(fetchMealCategoriesAsync(categoryState.pickedCategory))
  }

  const handleSearchText = (txt: string) => {
    setSearchQuery(txt)
  }
  const handleNavigateToDetailsScreen = (cartItem: string) => {
    navigation.navigate('DetalScreen', {
      cartItem
    })
  }

  return (
    <KeyboardAvoidingView
      backgroundColor="white"
      flex={1}
      paddingTop={StatusBar.currentHeight as number + 25}>
      <ExpoStatusBar style='dark' />
      <ScrollView
        flex={1}
        height="100%"
        keyboardShouldPersistTaps={'handled'}
        showsVerticalScrollIndicator={false}>
        <Header />
        <SearchArea searchQuery={searchQuery} handleSearchText={handleSearchText} />
        <TopCategories searchQuery={searchQuery} CATEGORIES={categoryState.categories} />
        <Title title="Popular Items" />
        <Sliders items={categoryState.meals} />
      </ScrollView>
      <Cart handleNavigateToDetailsScreen={handleNavigateToDetailsScreen} />
    </KeyboardAvoidingView>
  );
}
