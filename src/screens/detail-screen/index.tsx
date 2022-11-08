import React from 'react';
import { StatusBar, Dimensions } from 'react-native';

import { RootStackScreenProps } from '../../../types';
import { KeyboardAvoidingView, ScrollView, View } from 'native-base';
import Header from './components/Header';
import { useDispatch, useSelector } from '../../hooks/useRedux';
import { selectCartItems, updateCartItem } from '../../store/reducers/cart/cartSlice';
import Heading from './components/Heading';
import Footer from './components/Footer';

const SCREEN_HIGHT = Dimensions.get('screen').height
export default function DetailScreen({ navigation, route }: RootStackScreenProps<'DetalScreen'>) {
  const cartItems = useSelector(selectCartItems).cartItems
  const dispatch = useDispatch();

  const cartItem = cartItems.find((itm) => itm.title === route.params.cartItem)
  if (!cartItem) {
    navigation.goBack()
    return
  }
  const handleBackPress = () => {
    navigation.goBack()
  }
  const handleIncreaseItemQty = () => {
    dispatch(updateCartItem({
      title: cartItem.title,
      quantity: cartItem.quantity + 1
    }))
  }
  const handleDecreaseItemQty = () => {
    if (cartItem.quantity <= 1) return
    dispatch(updateCartItem({
      title: cartItem.title,
      quantity: cartItem.quantity - 1
    }))
  }
  return (
    <KeyboardAvoidingView
      backgroundColor="green.600"
      flex={1}
      paddingTop={StatusBar.currentHeight}>
      <ScrollView
        flex={1}
        height="100%"
        keyboardShouldPersistTaps={'handled'}
        showsVerticalScrollIndicator={false}>
        <Header handleBackPress={handleBackPress} />
        <View flex={1} bg='white' h={SCREEN_HIGHT / 1.25} borderTopRadius='30px' mt='24' />
        <View position='absolute' top='7%' h={SCREEN_HIGHT} w='100%'>
          <Heading {...cartItem} />
          <Footer handleIncreaseItemQty={handleIncreaseItemQty} handleDecreaseItemQty={handleDecreaseItemQty} quantity={cartItem.quantity} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
