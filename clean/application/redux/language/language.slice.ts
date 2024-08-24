import type { ICustomer } from '@clean/domain/entities/customerEntity';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface UserState {
  user: ICustomer | null;
}

export const setLanguage = createAsyncThunk(
  'language/setLanguage',
  async (args, thunkAPI) => {
    const state: any = thunkAPI.getState();
    const { languages } = state.Layout;
    const DEFAULT_LANGUAGE = 'es';
    const lng = languages.findIndex(
      (lang) => lang.code.toLowerCase() === DEFAULT_LANGUAGE
    );
    if (!lng) {
      return lng;
    }
    thunkAPI.rejectWithValue('Language Not Found');
  }
);

const initialState = {
  language: {
    code: 'ES',
    icon: 'https://storage.googleapis.com/bucket.juegalo.com/assets/icons/flags/es.svg',
    language: 'Español',
  },
};

export const languageSlice = createSlice({
  name: 'languageSlice',
  initialState,
  reducers: {
    resetLanguage: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(setLanguage.fulfilled, (state, action) => {
        state.language = action.payload;
      })
      .addCase(setLanguage.rejected, (state, action) => {
        state.language = {
          code: 'ES',
          icon: 'https://storage.googleapis.com/bucket.juegalo.com/assets/icons/flags/es.svg',
          language: 'Español',
        };
      });
  },  
});

const { reducer } = languageSlice;

export const { resetLanguage } = languageSlice.actions;

export default reducer;
