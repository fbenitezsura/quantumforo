import type { ICustomer } from '@clean/domain/entities/customerEntity';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface UserState {
  user: ICustomer | null;
}

const initialState = {
    loadingGetLocationCustomer: true,
    countryDetected: 'cl',
    userIp: 'juegaloIp',
    userCity: 'juegaloCity',
    isPeruvian: false,
    hashFinger: 'WEB',
    countryBlockDetected: false,
    browserNotAllowed: false,
    lastUpdatedFp: null,
    detectedWrongCountry: false
};

export const locationSlice = createSlice({
  name: 'locationSlice',
  initialState,
  reducers: {
    resetLocation: () => initialState,
  },
});

const { reducer } = locationSlice;

export const { resetLocation } = locationSlice.actions;

export default reducer;
