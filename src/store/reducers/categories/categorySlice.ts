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
  pickedCategory: string;
  categoryStatus: 'idle' | 'loading' | 'failed';
  mealStatus: 'idle' | 'loading' | 'failed';
  error: string;
}

const initialState: InitialState = {
  categories: [],
  pickedCategory: 'Beef',
  meals: [],
  categoryStatus: 'idle',
  mealStatus: 'idle',
  error: '',
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setPickedCategory: (state, action: PayloadAction<string>) => {
      state.pickedCategory = action.payload
    },
  },
  extraReducers: builder => {
    //Categories
    builder
      .addCase(fetchCategoriesAsync.pending, state => {
        state.categoryStatus = 'loading';
        state.error = '';
      })
      .addCase(
        fetchCategoriesAsync.fulfilled,
        (state, action: PayloadAction<Category[] | undefined>) => {
          state.categoryStatus = 'idle';
          state.error = '';
          state.categories = action.payload || [];
        },
      )
      .addCase(fetchCategoriesAsync.rejected, (state, action) => {
        state.categoryStatus = 'failed';
        state.error = action.error.message || '';
      });

    // Meals
    builder
      .addCase(fetchMealCategoriesAsync.pending, state => {
        state.mealStatus = 'loading';
        state.error = '';
      })
      .addCase(
        fetchMealCategoriesAsync.fulfilled,
        (state, action: PayloadAction<Meal[] | undefined>) => {
          state.mealStatus = 'idle';
          state.error = '';
          state.meals = action.payload || [];
        },
      )
      .addCase(fetchMealCategoriesAsync.rejected, (state, action) => {
        state.mealStatus = 'failed';
        state.error = action.error.message || '';
      });
  },
});

export const {setPickedCategory} = categorySlice.actions;
export const selectCategories = (state: RootState) => state.category;

export default categorySlice.reducer;
