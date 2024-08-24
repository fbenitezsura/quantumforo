import type { ICustomer } from '@clean/domain/entities/customerEntity';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface UserState {
  user: ICustomer | null;
}

const initialState = {
  currency: {
    code: 'CLP',
    currency: 'Peso Chileno',
    text: 'Peso Chileno',
    number: 0,
    decimal: 0,
    symbol: '$',
  },
};

export const setCurrency = createAsyncThunk(
  'currency/setCurrency',
  async (args, thunkAPI) => {
    const state: any = thunkAPI.getState();
    const { user } = state.User;
    const { currencies } = state.Layout;
    const currency = currencies.find(
      (cu) => cu.code.toLowerCase() === user.currency.toLowerCase()
    );
    if (currency !== undefined) {
      return currency;
    }
    thunkAPI.rejectWithValue('Currency Not Found');
  }
);

export const currencySlice = createSlice({
  name: 'currencySlice',
  initialState,
  reducers: {
    resetCurrency: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(setCurrency.fulfilled, (state, action) => {
        state.currency = action.payload;
      })
      .addCase(setCurrency.rejected, (state, action) => {
        state.currency = {
          code: 'CLP',
          currency: 'Peso Chileno',
          text: 'Peso Chileno',
          number: 0,
          decimal: 0,
          symbol: '$',
        };
      });
  },
});

const { reducer } = currencySlice;

export const { resetCurrency } = currencySlice.actions;

export default reducer;
