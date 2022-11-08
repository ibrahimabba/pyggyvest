import AsyncStorage from '@react-native-async-storage/async-storage';
import {Cart} from './cartSlice';

export async function persistCartItems(cartItems: Cart[]) {
  await AsyncStorage.setItem('@cart', JSON.stringify(cartItems));
}
