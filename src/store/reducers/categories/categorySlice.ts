import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../store';
import {fetchCategoriesAsync, fetchMealCategoriesAsync} from './categoryThunks';

export interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
}

export interface Meal {
  title: string;
  imgSrc: {
    uri: string;
  };
  calories: string;
  price: string;
  time: string;
}
export interface InitialState {
  categories: Category[];
  meals: Meal[];
  status: 'idle' | 'loading' | 'failed';
  error: string;
}

const initialState: InitialState = {
  categories: [],
  meals: [],
  status: 'idle',
  error: '',
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: builder => {
    //Categories
    builder
      .addCase(fetchCategoriesAsync.pending, state => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(
        fetchCategoriesAsync.fulfilled,
        (state, action: PayloadAction<Category[] | undefined>) => {
          state.status = 'idle';
          state.error = '';
          state.categories = action.payload || [];
        },
      )
      .addCase(fetchCategoriesAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || '';
      });

    // Meals
    builder
      .addCase(fetchMealCategoriesAsync.pending, state => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(
        fetchMealCategoriesAsync.fulfilled,
        (state, action: PayloadAction<Meal[] | undefined>) => {
          state.status = 'idle';
          state.error = '';
          state.meals = action.payload || [];
        },
      )
      .addCase(fetchMealCategoriesAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || '';
      });
  },
});

export const selectCategories = (state: RootState) => state.category;

export default categorySlice.reducer;
