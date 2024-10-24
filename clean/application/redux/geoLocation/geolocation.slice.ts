import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import IpData from '@clean/infrastructure/repositories/ipData';

const initialState = {
    loadingGetLocationCustomer: true,
    countryDetected: 'cl',
    userIp: 'quantumIp',
    userCity: 'quantumCity',
    userRegion: 'quantumRegion',
    countryBlockDetected: false,
    browserNotAllowed: false,
    lastUpdatedFp: null,
    detectedWrongCountry: false,
    latitudUser: -36.833499908447266,
    longitudUser: -73.04869842529297,
};

export const getLocationCustomer = createAsyncThunk(
  'geoLocationSlice/getLocationCustomer',
  async (args, thunkAPI) => {
    try {
      // Hacemos la petición a la ruta de Next.js
      const response = await fetch('/api/geoLocation'); // Suponiendo que la ruta está en '/api/ipdata'

      // Verificamos si la respuesta es válida
      if (!response.ok) {
        throw new Error('Error al obtener datos de IP');
      }

      // Parseamos los datos
      const result = await response.json();
      console.log('result', result);

      // Devolvemos los datos al thunk
      console.log('result.data', result.data);
      return result.data; // O la estructura que estés esperando

    } catch (error) {
      console.error('Error en getLocationCustomer:', error);
      return thunkAPI.rejectWithValue('Error al obtener la ubicación del cliente');
    }
  }
);


export const revalidateCountry = createAsyncThunk(
  'geoLocationSlice/revalidateCountry',
  async (arg, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const { countryDetected } = state.GeoLocation;

      // Extract the country code from the current path
      if (typeof window !== 'undefined') {
        const path = window.location.pathname;
        const countryCode = path.split('/')[1];
        if (countryCode !== countryDetected) {
          thunkAPI.dispatch(setWrongDetected(true));
          setTimeout(() => {
            thunkAPI.dispatch(getLocationCustomer())
          }, 1)
        } else {
          thunkAPI.dispatch(setWrongDetected(false));
        }
      } else {
        thunkAPI.dispatch(setWrongDetected(false));
      }
    } catch (error) {
      console.log(error)
    }
  }
)

export const locationSlice = createSlice({
  name: 'locationSlice',
  initialState,
  reducers: {
    resetLocation: () => initialState,
    setCountryDetected: (state, action) => {
      state.countryDetected = action.payload;
    },
    setWrongDetected: (state, action) => {
      state.detectedWrongCountry = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getLocationCustomer.fulfilled, (state, action) => {
      state.userCity = action.payload.city;
      state.userIp = action.payload.ip;
      state.countryDetected = action.payload.country;
      state.userRegion = action.payload.region_code;
      state.latitudUser = action.payload.latitude;
      state.longitudUser = action.payload.longitude;
    });
  },
});

const { reducer } = locationSlice;

export const { resetLocation, setWrongDetected } = locationSlice.actions;

export default reducer;
