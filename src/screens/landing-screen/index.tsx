import React, {useEffect} from 'react';
import {StatusBar as ExpoStatusBar} from 'expo-status-bar';
import {KeyboardAvoidingView} from 'native-base';
import {RootStackScreenProps} from '../../../types';
import Swiper from './components/Swiper';
import Header from '../../components/header';
import Footer from './components/footer';
import {images} from './landingImages';
import {useDispatch} from '../../hooks/useRedux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Cart, loadCachedCart} from '../../store/reducers/cart/cartSlice';

export default function LandingScreen({
  navigation,
}: RootStackScreenProps<'LandingScreen'>) {
  const dispatch = useDispatch();
  useEffect(() => {
    loadCachedCartItems();
  }, []);

  const loadCachedCartItems = async () => {
    // Load Cart
    const cartJSON = await AsyncStorage.getItem('@cart');
    if (cartJSON) {
      const cartItems = JSON.parse(cartJSON);
      dispatch(loadCachedCart(cartItems as Cart[]));
    }
  };

  const handleLogin = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <KeyboardAvoidingView backgroundColor="black" flex={1}>
      <ExpoStatusBar style="light" />
      <Header />
      <Swiper images={images} />
      <Footer handleLogin={handleLogin} />
    </KeyboardAvoidingView>
  );
}
