import React from 'react';

import {KeyboardAvoidingView} from 'native-base';
import {RootStackScreenProps} from '../../../types';
import Swiper from './components/Swiper';
import Header from '../../components/header';
import Footer from './components/footer';
import {images} from './landingImages';

export default function LandingScreen({
  navigation,
}: RootStackScreenProps<'LandingScreen'>) {
  const handleLogin = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <KeyboardAvoidingView backgroundColor="black" flex={1}>
      <Header />
      <Swiper images={images} />
      <Footer handleLogin={handleLogin} />
    </KeyboardAvoidingView>
  );
}
