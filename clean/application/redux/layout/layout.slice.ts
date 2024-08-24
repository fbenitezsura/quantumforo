import LayoutUseCase from '@clean/domain/useCase/layoutUseCase';
import LayoutRepositoryImpl from '@clean/infrastructure/repositories/layoutRepositoryImpl';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const layoutRepo = new LayoutRepositoryImpl();
const layoutService = new LayoutUseCase(layoutRepo);
interface LayoutState {
  loadingLayout: Boolean;
  languages: Array<string>;
  countryCallingCodes: Array<string>;
  currencies: Array<string>;
  supports: Array<string>;
  onlyWithInvitation: Boolean;
  maintenanceMode: boolean;
  countryAvailable: Array<string>;
  prevPath: string;
  currentPath: string;
  lastUpdated: Date;
}

const initialState: LayoutState = {
  loadingLayout: true,
  languages: [],
  countryCallingCodes: [],
  currencies: [],
  supports: [],
  countryAvailable: [],
  onlyWithInvitation: false,
  maintenanceMode: false,
  prevPath: '',
  currentPath: '/',
  lastUpdated: null,
};

export const fetchLayout = createAsyncThunk(
  'layoutSlice/fetchLayout',
  async (args, thunkAPI) => {
    let languages = [];
    let countryCallingCodes = [];
    let currencies = [];
    let onlyWithInvitation = [];
    let countryAvailable = [];

    const resultLanguages = await layoutService.GetLanguages();
    const resultCountryCallingCodes =
      await layoutService.GetCountryCallingCodes();
    const resultCurrencies = await layoutService.GetCurriencies();
    const resultInfo = await layoutService.GetInfoGenerals();
    const resultCountry = await layoutService.GetCountries();

    resultLanguages.fold(
      (err) => (languages = []),
      (lngs) => (languages = lngs)
    );
    resultCountryCallingCodes.fold(
      (err) => (languages = []),
      (Codes) => (countryCallingCodes = Codes)
    );
    resultCurrencies.fold(
      (err) => (languages = []),
      (Currencie) => (currencies = Currencie)
    );
    resultInfo.fold(
      (err) => (languages = []),
      (Info) => (onlyWithInvitation = Info)
    );
    resultCountry.fold(
      (err) => (languages = []),
      (countries) => (countryAvailable = countries)
    );

    return {
      languages,
      countryCallingCodes,
      currencies,
      onlyWithInvitation,
      countryAvailable,
    };
  }
);

export const layoutSlice = createSlice({
  name: 'layouSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLayout.rejected, (state, action) => {
        state.loadingLayout = false;
      })
      .addCase(fetchLayout.fulfilled, (state, action) => {
        state.languages = action.payload.languages;
        state.countryCallingCodes = action.payload.countryCallingCodes;
        state.currencies = action.payload.currencies;
        state.onlyWithInvitation = action.payload.onlyWithInvitation;
        state.maintenanceMode = action.payload.onlyWithInvitation;
        state.countryAvailable = action.payload.countryAvailable;
        state.lastUpdated = new Date();
        state.loadingLayout = false;
      });
  },
});

export const layout = (state: any) => state.layoutSlice;

export default layoutSlice.reducer;
