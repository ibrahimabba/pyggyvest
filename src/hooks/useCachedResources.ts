import {FontAwesome} from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect, useState} from 'react';
// import {useDispatch} from './useRedux';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {Cart, loadCachedCart} from '../store/reducers/cart/cartSlice';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  //const dispatch = useDispatch();
  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          'space-mono': require('../../assets/fonts/SpaceMono-Regular.ttf'),
        });

        // // Load Cart
        // const cartJSON = await AsyncStorage.getItem('@cart');
        // if (cartJSON) {
        //   const cartItems = JSON.parse(cartJSON);
        //   dispatch(loadCachedCart(cartItems as Cart[]));
        // }
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
