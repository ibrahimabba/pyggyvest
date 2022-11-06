import {createSlice} from '@reduxjs/toolkit';
export interface InitialState {
  status: 'idle' | 'loading' | 'failed';
}

const initialState: InitialState = {
  status: 'idle',
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = categorySlice.actions;

export default categorySlice.reducer;
