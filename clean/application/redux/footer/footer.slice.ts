import LayoutUseCase from '@clean/domain/useCase/layoutUseCase';
import LayoutRepositoryImpl from '@clean/infrastructure/repositories/layoutRepositoryImpl';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const layoutRepo = new LayoutRepositoryImpl();
const layoutService = new LayoutUseCase(layoutRepo);
interface FooterState {
  menuFooter: Array<Object> | null;
}

const initialState = {
  menuFooter: [],
  socialMedia: [],
  lastUpdatedFooter: null,
};

export const getMenuFooter = createAsyncThunk(
  'footer/getMenuFooter',
  async (args, { getState }) => {
    const state: any = getState();
    const { countryDetected } = state.GeoLocation;
    let menuFooter = [];
    let socialMedia = [];
    const resultMenuFooter = await layoutService.GetMenuFooter(countryDetected,'es');
    const resultSocialMedia = await layoutService.GetSocialMedia(countryDetected,'es');

    resultMenuFooter.fold(
      (err) => (menuFooter = []),
      (menu) => (menuFooter = menu)
    );

    resultSocialMedia.fold(
      (err) => (socialMedia = []),
      (social) => (socialMedia = social)
    )

    return {
      menuFooter,
      socialMedia
    };
  }
);

export const footerSlice = createSlice({
  name: 'footerSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMenuFooter.fulfilled, (state, action) => {
      state.menuFooter = action.payload.menuFooter;
      state.socialMedia = action.payload.socialMedia;
      state.lastUpdatedFooter = new Date();
    });
  },
});

const { reducer } = footerSlice;

export default reducer;
