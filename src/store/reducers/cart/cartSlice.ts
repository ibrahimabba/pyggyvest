import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../store';
import {Meal} from '../categories/categorySlice';

export interface Cart extends Meal {
  quantity: number;
}

interface InitialState {
  cartItems: Cart[];
}
const initialState: InitialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Meal>) => {
      const cartItems = [...state.cartItems];
      const existingCartIndex = cartItems.findIndex(
        itm => itm.title === action.payload.title,
      );
      if (existingCartIndex !== -1) {
        const updatedCartItem = cartItems[existingCartIndex];
        updatedCartItem.quantity = updatedCartItem.quantity + 1;
        cartItems.splice(existingCartIndex, 1, updatedCartItem);
        state.cartItems = cartItems;
      } else {
        cartItems.push({
          ...action.payload,
          quantity: 1,
        });
        state.cartItems = cartItems
      }
    },
    // deletFromCart: (state, action: PayloadAction<Meal>) => {
    //   const cartItems = [...state.cartItems];
    //   const existingCartIndex = cartItems.findIndex(
    //     itm => itm.title === action.payload.title,
    //   );
    //   if (existingCartIndex !== -1) {
    //     const updatedCartItem = cartItems[existingCartIndex];
    //     updatedCartItem.quantity = updatedCartItem.quantity + 1;
    //     cartItems.splice(existingCartIndex, 1, updatedCartItem);
    //     state.cartItems = cartItems;
    //   } else {
    //     cartItems.push({
    //       ...action.payload,
    //       quantity: 1,
    //     });
    //   }
    // },
  },
});

// Action creators are generated for each case reducer function
export const {addToCart} = cartSlice.actions;
export const selectCartItems = (state: RootState) => state.cart;
export default cartSlice.reducer;
