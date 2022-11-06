import { configureStore } from '@reduxjs/toolkit';
import categorySlice from './reducers/categories/categorySlice';

export const store = configureStore({
    reducer: {
        category: categorySlice,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
