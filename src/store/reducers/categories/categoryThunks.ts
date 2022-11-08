import {createAsyncThunk} from '@reduxjs/toolkit';
import {Category, Meal} from './categorySlice';

export const fetchCategoriesAsync = createAsyncThunk(
  'category/fetchCategory',
  async () => {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/categories.php',
    );
    if (response) {
      const resData = await response.json();
      if (resData.categories && Array.isArray(resData.categories)) {
        const categories: Category[] = [];
        for (let i = 0; i < 6; i++) {
          const cat = resData.categories[i];
          categories.push({
            idCategory: cat.idCategory,
            strCategory: cat.strCategory,
            strCategoryThumb: cat.strCategoryThumb,
          });
        }
        return categories;
      }
    }
  },
);

export const fetchMealCategoriesAsync = createAsyncThunk(
  'category/fetchMealCategory',
  async (category: string) => {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + category,
    );
    if (response) {
      const resData = await response.json();
      if (resData.meals && Array.isArray(resData.meals)) {
        const meals: Meal[] = [];
        for (let i = 0; i < 5; i++) {
          const meal = resData.meals[i];
          meals.push({
            title: meal.strMeal,
            imgSrc: {
              uri: meal.strMealThumb,
            },
            calories: '44',
            price: '9.99',
            time: '20 min',
            category,
          });
        }
        return meals;
      }
    }
  },
);
